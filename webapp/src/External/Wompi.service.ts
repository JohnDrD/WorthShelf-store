import axios from "axios";

export type PaymentForm = {
  acceptance_token: string;
  amount_in_cents: number;
  currency: string;
  signature: string;
  customer_email: string;
  payment_method: {
    type: string;
    token: string;
    installments: number;
  };
  reference: string;
  expiration_time: string | null;
};

export class WompiService {
  constructor(
    private publicKey : string,
    private secretKey: string,
    private intSing: string
  ) {}
  async getTokens() {
    const data = await axios.get(
      `https://api-sandbox.co.uat.wompi.dev/v1/merchants/${this.publicKey}`
    );
    const response = data.data;
    if (response.data) {
      return response.data.presigned_acceptance.acceptance_token;
    }
    return ""
  }

  async tokenizeCard(cardData: {
    number: string;
    cvc: string;
    exp_month: string;
    exp_year: string;
    card_holder: string;
  }) {
    const response = await axios.post(
      "https://api-sandbox.co.uat.wompi.dev/v1/tokens/cards",
      cardData,
      {headers:{Authorization: `Bearer ${this.publicKey}`}}
    );
    const data = response.data.data;
    if (data) {
      return data.id;
    }
  }
  async generateSig(amount: number) {
    const transactionRef=window.crypto.randomUUID()
    const ref = transactionRef + amount + "COP" + this.intSing;
    const encondedText = new TextEncoder().encode(ref);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return [hashHex,transactionRef ];
  }

  async createTransaction(transaction: PaymentForm) {
    try {
        const response = await axios.post(
            "https://api-sandbox.co.uat.wompi.dev/v1/transactions",
            transaction,
            { headers: { Authorization: `Bearer ${this.secretKey}` } }
          );
      
          const data= response.data.data
          if(data){
              return data
          }
    } catch (error) {
        return
    }   

  }
}
