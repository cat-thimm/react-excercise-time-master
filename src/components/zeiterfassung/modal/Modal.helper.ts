import store from "../../store/store";

export const getHours = (id: number) =>
    parseFloat(
        store.workingInformation[id].customers[
            parseInt(store.workingInformation[id].selectedCustomer)
        ].hours
    );
export const getCustomers = (id: number) => store.workingInformation[id].selectedCustomer;

export const getComment = (id: number) =>
    store.workingInformation[id].customers[
        parseInt(store.workingInformation[id].selectedCustomer)
    ].comments;

export const setHours = (id: number, hours: number | string) => {
  store.workingInformation[id].customers[
        parseInt(store.workingInformation[id].selectedCustomer)
    ].hours = hours.toString();
};

export const setCustomers = (id: number, customer: string) => {
    store.workingInformation[id].selectedCustomer = customer;
};

export const setComment = (id: number, comment: string) => {
    store.workingInformation[id].customers[
        parseInt(store.workingInformation[id].selectedCustomer)
    ].comments = comment;
};
