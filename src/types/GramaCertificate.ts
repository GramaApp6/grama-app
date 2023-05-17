import GramaCertificateRequest from "./GramaCertificateRequest.ts";

export enum Status{
    NEW,
    FAILED,
    PASSED
}
export interface GramaCertificate extends GramaCertificateRequest{
    status: string;
    certificateId: string;
    requestDate: Date;
    gramaDivision: number;
    issuedDate?: Date;
    validationStatus : {
        identity: string;
        address: string;
        police: string;
    }
}