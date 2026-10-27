/**
 * Represents an item in the system
 */
export interface Item {
    id: string;
    name: string;
    sku: string;
    quantity: number;
    price: number;
    catagory: string;
}