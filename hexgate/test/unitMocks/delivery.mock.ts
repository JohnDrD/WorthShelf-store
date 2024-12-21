import { Delivery } from '../../src/context/delivery/domain/delivery.entity'
export const DELIVERY_PRIM_MOCK={
    uuid: "",
    postCode: "",
    country: "",
    city: "",
    address: "",
    status: "",
    transactionId: ""
}
export const DELIVERY_MOCK:Delivery=Delivery.create(DELIVERY_PRIM_MOCK)

export const DELIVERY_REP={
    getById: jest.fn().mockResolvedValue(DELIVERY_MOCK),
    create:jest.fn().mockResolvedValue(DELIVERY_MOCK)
}