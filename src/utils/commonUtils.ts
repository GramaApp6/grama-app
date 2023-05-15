import {Address} from "../types";
export const getAddressAsString = (address: Address) => {
    return [address.houseNumber, address.streetName, address.suburb, address.city].join(", ")
}