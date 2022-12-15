export interface Entry {
    id: number;
    day: string;
    date: Date;
    customers: CustomerTimes[];
    selectedCustomer: string;
}

export interface CustomerTimes {
    customerName: Customer;
    hours: string;
    comments: string;
}

export type Hours = {
    week: string;
    hours: number;
    vacation: boolean;
}

export enum Customer {
    Lidl = 'Lidl',
    Huawei = 'Huawei',
    Beiselen = 'Beiselen'
}

export type Worker = {
    id: string;
    name: string;
    hours: Hours[]
}