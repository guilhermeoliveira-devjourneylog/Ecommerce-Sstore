module.exports = `
    
    type Sale {
        id: ID
        user: User
        products: [Product]
        quantity: [Int]
        total: Float
        billingAddress: Billing
        shippingAddress: Shipping
        shipped: Boolean
        createdOn: String
    }
    
    input SaleInput {
        token: Token
        user: ID
        products: String
        quantity: [Int]
        total: Float
        billingAddressId: ID
        shippingAddressId: ID
        email: String
    }
    
    type SalePayload {
        success: Boolean
        type: String
        code: String
        message: String
        sale: Sale
    }

    type Mutation {
        createSale(input: SaleInput): SalePayload
    }
    
`
