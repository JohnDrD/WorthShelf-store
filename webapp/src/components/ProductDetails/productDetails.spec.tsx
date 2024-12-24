import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProductDetails } from './productDetails';
import { Provider } from 'react-redux';
import { store } from '../../store/store.config';
import { ProductCardParams } from '../ProductCard/ProductCard.interface';
import LoginModal from '../LogInModal/LoginModal';
import DeliveryForm from '../TransactionForm/transactionForm';
import '@testing-library/jest-dom';

const mockItem: ProductCardParams = {
    uuid: 'prod1',
    name: 'Product 1',
    unitValue: 50,
    stock: 10,
    images: ['image1.jpg', 'image2.jpg'],
    description: 'This is a product description.',
    dateCreated: 0
};

const mockUser = { uuid: 'user1', name: 'John Doe' };

jest.mock('../../store/store.config', () => ({
  ...jest.requireActual('../../store/store.config'),
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe('ProductDetails', () => {
  it('renders product details correctly', () => {
    render(
      <Provider store={store}>
        <ProductDetails item={mockItem} showSummary={jest.fn()} />
      </Provider>
    );

    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/50 USD/)).toBeInTheDocument();
    expect(screen.getByText(/In stock: 10/)).toBeInTheDocument();
    expect(screen.getByText(/This is a product description./)).toBeInTheDocument();
  });

  it('displays "Log In" button when user is not logged in', () => {
    render(
      <Provider store={store}>
        <ProductDetails item={mockItem} showSummary={jest.fn()} />
      </Provider>
    );
    expect(screen.getByText(/Log In/)).toBeInTheDocument();
  });

  it('opens the LoginModal when "Log In" button is clicked', () => {
    render(
      <Provider store={store}>
        <ProductDetails item={mockItem} showSummary={jest.fn()} />
      </Provider>
    );
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

});
