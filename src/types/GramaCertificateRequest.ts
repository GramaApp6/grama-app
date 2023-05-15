export interface Address{
    houseNumber: string;
    streetName: string;
    suburb: string;
    city: string;
}

export default interface GramaCertificateRequest {
    firstName: string;
    lastName: string;
    nic: string;
    mobileNumber: string;
    gramaDivision: string;
    address: Address;
    reason: string;
}