import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DeliveryForm from "./transactionForm"
import axios from "axios";
import { WompiService } from "../../External/Wompi.service";

// Spy on necessary modules and functions
describe("DeliveryForm", () => {
  let dispatchSpy: jest.SpyInstance;
  let closeMock: jest.Mock;

  beforeEach(() => {
    // Create spies for Redux hooks
    dispatchSpy = jest.spyOn(require("../../store/store.config"), "useAppDispatch").mockReturnValue(jest.fn());
    const selectorSpy = jest.spyOn(require("../../store/store.config"), "useAppSelector").mockReturnValue({
      productData: "productId",
      amountData: 1,
      UserData: { uuid: "user-id", name: "John Doe", token: "user-token" },
    });

    // Create a spy for axios and WompiService
    jest.spyOn(axios, "get").mockResolvedValue({ data: { data: { stock: 10, unitValue: 100 } } });
    const getTokensSpy = jest.spyOn(WompiService.prototype, "getTokens").mockResolvedValue("acceptance-token");
    const tokenizeCardSpy = jest.spyOn(WompiService.prototype, "tokenizeCard").mockResolvedValue("card-token");
    const generateSigSpy = jest.spyOn(WompiService.prototype, "generateSig").mockResolvedValue(["signature", "reference"]);
    const createTransactionSpy = jest.spyOn(WompiService.prototype, "createTransaction").mockResolvedValue("transaction-id");

    closeMock = jest.fn();
  });

  it("renders the DeliveryForm correctly", () => {
    render(<DeliveryForm isOpen={true} onClose={closeMock} />);

    expect(screen.getByLabelText(/Post Code/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Card Number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiry Date/)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV/)).toBeInTheDocument();
  });

  it("validates card number", () => {
    render(<DeliveryForm isOpen={true} onClose={closeMock} />);

    const cardInput = screen.getByLabelText(/Card Number/) as HTMLInputElement;
    fireEvent.change(cardInput, { target: { value: "4111111111111111" } });

    expect(screen.getByText(/Card is valid/)).toBeInTheDocument();
  });

  it("shows error message when card number is invalid", () => {
    render(<DeliveryForm isOpen={true} onClose={closeMock} />);

    const cardInput = screen.getByLabelText(/Card Number/) as HTMLInputElement;
    fireEvent.change(cardInput, { target: { value: "123" } });

    expect(screen.getByText(/Card is invalid/)).toBeInTheDocument();
  });

});
