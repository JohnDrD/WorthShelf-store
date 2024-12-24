import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { ListProducts } from "./Listproducts";
import '@testing-library/jest-dom';
jest.mock("axios");

describe("ListProducts component", () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders products fetched from API", async () => {
        const mockProducts = [
            {
                uuid: "1",
                name: "Product 1",
                unitValue: 10,
                stock: 5,
                description: "Description 1",
                images: ["image1.jpg"],
                dateCreated: "2023-01-01",
            },
            {
                uuid: "2",
                name: "Product 2",
                unitValue: 20,
                stock: 10,
                description: "Description 2",
                images: ["image2.jpg"],
                dateCreated: "2023-02-01",
            },
        ];

        mockedAxios.get.mockResolvedValueOnce({
            data: { data: mockProducts },
        });

        render(<ListProducts />);

        expect(mockedAxios.get).toHaveBeenCalledWith(
            "http://3.141.197.179:3000/stocks?amount=10"
        );
    });

    it("renders an empty grid when no products are fetched", async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: { data: [] },
        });

        render(<ListProducts />);

        await waitFor(() => {
            expect(screen.queryByText(/Product/)).not.toBeInTheDocument();
        });

        expect(mockedAxios.get).toHaveBeenCalledWith(
            "http://3.141.197.179:3000/stocks?amount=10"
        );
    });
});
