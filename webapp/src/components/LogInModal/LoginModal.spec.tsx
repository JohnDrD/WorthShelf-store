import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginModal from "./LoginModal";
import axios from "axios";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import '@testing-library/jest-dom';

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockStore = configureStore([]);

const renderWithProvider = (component: JSX.Element, store: any) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("LoginModal component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the login modal when open", () => {
    const store = mockStore({});
    renderWithProvider(<LoginModal isOpen={true} onClose={jest.fn()} />, store);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
  });

  it("handles login success and closes the modal", async () => {
    const store = mockStore({});
    const mockOnClose = jest.fn();

    mockedAxios.post.mockResolvedValueOnce({
      data: {
        data: {
          user: { id: 1, name: "John Doe" },
          token: "mock-token",
        },
      },
    });

    renderWithProvider(
      <LoginModal isOpen={true} onClose={mockOnClose} />, 
      store
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Access"));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        "http://3.141.197.179:3000/costumer",
        { email: "test@example.com", password: "password123" }
      );
      expect(mockOnClose).toHaveBeenCalledWith(true);
    });
  });

  it("displays an error message on login failure", async () => {
    const store = mockStore({});

    mockedAxios.post.mockRejectedValueOnce(new Error("Login failed"));

    renderWithProvider(<LoginModal isOpen={true} onClose={jest.fn()} />, store);

    fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByText("Access"));

    await waitFor(() => {
      expect(screen.getByText("Invalid email or password.")).toBeInTheDocument();
    });
  });

  it("closes the modal when the Cancel button is clicked", () => {
    const store = mockStore({});
    const mockOnClose = jest.fn();

    renderWithProvider(<LoginModal isOpen={true} onClose={mockOnClose} />, store);

    fireEvent.click(screen.getByText("Cancel"));

    expect(mockOnClose).toHaveBeenCalled();
  });
});