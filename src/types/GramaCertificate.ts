import GramaCertificateRequest from "./GramaCertificateRequest.ts";

export enum Status{
    NEW,
    FAILED,
    PASSED
}
export interface GramaCertificate extends GramaCertificateRequest{
    status: Status;
    certificateNumber?: string;
    requestDate: Date;
    gramaDivision: number;
    issuedDate?: Date;
    validationStatus : {
        identity: Status;
        address: Status;
        police: Status;
    }
}