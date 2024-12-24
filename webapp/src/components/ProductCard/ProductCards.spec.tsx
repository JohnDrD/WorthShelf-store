import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { Provider } from 'react-redux';
import { store } from '../../store/store.config';
import { ProductCardParams } from './ProductCard.interface';
import '@testing-library/jest-dom';

const mockItem: ProductCardParams = {
    uuid: 'prod1',
    name: 'Product 1',
    unitValue: 50,
    images: ['image1.jpg'],
    stock: 0,
    description: '',
    dateCreated: 0
};

describe('ProductCard', () => {
  it('renders the product card and opens the modal when clicked', async () => {
    render(
      <Provider store={store}>
        <ProductCard {...mockItem} />
      </Provider>
    );
    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/50 USD/)).toBeInTheDocument();
  });

});
