import { render, screen, fireEvent } from '@testing-library/react';
import TransactionModal from './OrderSumary';
import { TransactionSummary } from '../../interfaces/transactionSummary.interfcae';

const mockData:TransactionSummary = {
    uuid: '12345',
    total: 150,
    productsList: [
        {
            uuid: 'prod1',
            name: 'Product 1',
            unitValue: 30,
            images: ['image1.jpg'],
            stock: 0,
            description: '',
            dateCreated: 0
        },
        {
            uuid: 'prod2',
            name: 'Product 2',
            unitValue: 50,
            images: ['image2.jpg'],
            stock: 0,
            description: '',
            dateCreated: 0
        },
    ],
    deliveryInfo: {
        country: 'Country',
        address: '123 Address St',
        postCode: '12345',
        city: '',
        status: '',
        transactionId: ''
    },
    userInfo: {
        name: 'John Doe',
        uuid: '',
        email: '',
        phone: '',
        token: ''
    },
    dateCreated: 0,
    dateChanged: 0,
    status: ''
};

describe('TransactionModal', () => {
  it('renders correctly with given data', () => {
    render(<TransactionModal data={mockData} onClose={() => {}} />);

    expect(screen.getByText(/Summary/)).toBeInTheDocument();
    expect(screen.getByText(/id: 12345/)).toBeInTheDocument();
    expect(screen.getByText(/Total Amount : 150/)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/30 USD/)).toBeInTheDocument();
    expect(screen.getByText(/Country, 123 Address St/)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  });

  it('renders no products when productsList is empty or undefined', () => {
    const emptyData = { ...mockData, productsList: [] };
    render(<TransactionModal data={emptyData} onClose={() => {}} />);
    expect(screen.queryByText(/Product 1/)).not.toBeInTheDocument();
  });

  it('calls onClose when the button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<TransactionModal data={mockData} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText(/Ok/));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

});
