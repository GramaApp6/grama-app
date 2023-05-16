export interface Address{
    houseNo: string;
    streetName: string;
    suburb: string;
    city: string;
}

export default interface GramaCertificateRequest {
    firstName: string;
    lastName: string;
    NIC: string;
    mobileNo: string;
    divisionId: number;
    email: string;
    address: Address;
    purpose: string;
}