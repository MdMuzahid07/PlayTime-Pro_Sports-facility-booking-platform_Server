
export interface TCartItem {
    productId: string;
    quantity: number;
    totalPrice: number;
};


export interface TCart {
    userId: string;
    items: TCartItem[];
    subtotal: number;
    tax: number;
    shippingCost: number;
    total: number;
    currency: string;
};
