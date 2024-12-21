export const  STOCK_MOCK={
    uuid: "1",
    name: "",
    unitValue: 0,
    stock: 10,
    description: "",
    images: [],
    dateCreated: 0
}
export const STOCKS_REPOSITORY_MOCK={
    getById: jest.fn().mockResolvedValue(STOCK_MOCK),
    getStocks: jest.fn().mockResolvedValue([STOCK_MOCK]),
    updateStock: jest.fn().mockResolvedValue(STOCK_MOCK),
    getBatch: jest.fn().mockResolvedValue([STOCK_MOCK])
}

export const UPDATE_STOCKS_DTO= [
    { id: '1', amount: 5 }
]

