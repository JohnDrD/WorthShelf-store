import { WompiService, PaymentForm } from './Wompi.service';  // Adjust path if necessary
import axios from 'axios';

// Mocking axios globally
jest.mock('axios');
const crypto = require('crypto');

Object.defineProperty(globalThis, 'crypto', {
  value: {
    getRandomValues: (arr:any) => crypto.randomBytes(arr.length)
  }
});
// Test suite for WompiService class
describe('WompiService', () => {
  let wompiService: WompiService;
  const publicKey = 'public-key';
  const secretKey = 'secret-key';
  const intSing = 'signature-key';

  beforeEach(() => {
    wompiService = new WompiService(publicKey, secretKey, intSing);
  });

  it('should fetch tokens', async () => {
    const mockedResponse = {
      data: {
        data: {
          presigned_acceptance: { acceptance_token: 'acceptance-token' },
        },
      },
    };
    (axios.get as jest.Mock).mockResolvedValueOnce(mockedResponse);

    const token = await wompiService.getTokens();
    expect(axios.get).toHaveBeenCalledWith(`https://api-sandbox.co.uat.wompi.dev/v1/merchants/${publicKey}`);
    expect(token).toBe('acceptance-token');
  });

  it('should tokenize a card', async () => {
    const cardData = {
      number: '4111111111111111',
      cvc: '123',
      exp_month: '12',
      exp_year: '24',
      card_holder: 'John Doe',
    };
    const mockedResponse = {
      data: {
        data: {
          id: 'card-token',
        },
      },
    };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockedResponse);

    const token = await wompiService.tokenizeCard(cardData);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api-sandbox.co.uat.wompi.dev/v1/tokens/cards',
      cardData,
      { headers: { Authorization: `Bearer ${publicKey}` } }
    );
    expect(token).toBe('card-token');
  });



  it('should create a transaction', async () => {
    const transaction: PaymentForm = {
      acceptance_token: 'acceptance-token',
      amount_in_cents: 1000,
      currency: 'COP',
      signature: 'signature',
      customer_email: 'john.doe@example.com',
      payment_method: {
        type: 'card',
        token: 'card-token',
        installments: 1,
      },
      reference: 'transaction-reference',
      expiration_time: null,
    };

    const mockedResponse = {
      data: {
        data: {
          id: 'transaction-id',
        },
      },
    };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockedResponse);

    const response = await wompiService.createTransaction(transaction);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api-sandbox.co.uat.wompi.dev/v1/transactions',
      transaction,
      { headers: { Authorization: `Bearer ${secretKey}` } }
    );
    expect(response).toEqual(mockedResponse.data.data);
  });

  it('should handle errors while creating a transaction', async () => {
    const transaction: PaymentForm = {
      acceptance_token: 'acceptance-token',
      amount_in_cents: 1000,
      currency: 'COP',
      signature: 'signature',
      customer_email: 'john.doe@example.com',
      payment_method: {
        type: 'card',
        token: 'card-token',
        installments: 1,
      },
      reference: 'transaction-reference',
      expiration_time: null,
    };

    (axios.post as jest.Mock).mockRejectedValueOnce(new Error('Transaction error'));

    const response = await wompiService.createTransaction(transaction);

    expect(response).toBeUndefined();
  });
});
