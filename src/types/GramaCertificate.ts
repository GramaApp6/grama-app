import GramaCertificateRequest from "./GramaCertificateRequest.ts";

export enum Status{
    NEW,
    FAILED,
    PASSED
}
export interface GramaCertificate extends GramaCertificateRequest{
    reason: string;
    status: Status;
    certificateNumber?: string;
    requestDate: Date;
    issuedDate?: Date;
    validationStatus : {
        identity: Status;
        address: Status;
        police: Status;
    }
}