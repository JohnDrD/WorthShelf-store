import { TransactionCreateDTO } from "src/context/transaction/application/DTO/transactionCreate.dto"



export const TRANASACTION_MOCK ={
    uuid: "",
    total: 0,
    dateCreated: 0,
    dateChanged: 0,
    productsList: [],
    userId: "",
    status: "",
    transactionID: ""
}

export const  TRANSACTION_MOCK= {
    updateStatus: jest.fn().mockReturnValue(TRANASACTION_MOCK),
    createTransaction: jest.fn().mockReturnValue(TRANASACTION_MOCK),
    getById: jest.fn().mockReturnValue(TRANASACTION_MOCK)
}

export const         TRANSACION_MODEL_MOCK = {
    get: jest.fn(),
    update: jest.fn(),
    create: jest.fn(),
};
export const TRANSACTION_DTO_MOCK={
    total: 0,
    productsList: [],
    userId: "",
    status: "",
    deliveryParams: undefined,
    transactionID: ""
}
export const DELIVERY_DTO_MOCK={
    postCode: "",
    country: "",
    city: "",
    address: "",
    status: "",
    transactionId: ""
}

export const COSTUMER_DTO_MOCK={
    uuid: "",
    name: "",
    email: "",
    phone: ""
}

export const STOCK_DTO_MOCK={
    uuid: "",
    name: "",
    unitValue: 0,
    stock: 0,
    description: "",
    images: [],
    dateCreated: 0
}

