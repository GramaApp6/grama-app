import {Address} from "../types";
export const getAddressAsString = (address: Address) => {
    return [address.houseNo, address.streetName, address.suburb, address.city].join(", ")
}