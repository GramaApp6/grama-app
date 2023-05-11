import React, {useState} from 'react';

import ProfileNavbar from "../components/ProfileNavbar";
import InputField from "../components/form/InputField.tsx";
import TextArea from "../components/form/TextArea.tsx";
import DropDown, {Option} from "../components/form/DropDown.tsx";
import {GramaCertificateRequest} from "../types";


function RequestPage() {
    const [gramaDivisions, setGramaDivisions] = useState<Option[]>([]);
    React.useEffect(() => {
        //TODO: Get grama divisions from backend
        const data:Option[] = [
            {key: "1", value: "Grama Division 1"},
            {key: "2", value: "Grama Division 2"},
            {key: "3", value: "Grama Division 3"},
        ];
        setGramaDivisions(data);
    }, []);


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataElement = e.target as HTMLFormElement;
        const data:GramaCertificateRequest = {
            firstName: dataElement.firstName.value,
            lastName: dataElement.lastName.value,
            nic: dataElement.nic.value,
            mobileNumber: dataElement.phoneNumber.value,
            gramaDivision: dataElement.gramaDivision.value,
            address: {
                houseNumber: dataElement.houseNumber.value,
                streetName: dataElement.streetName.value,
                suburb: dataElement.suburb.value,
                city: dataElement.city.value,
            },
            reason: dataElement.reason.value
        }
        //TODO: Send data to backend
        console.log("Submitted", data);
    };
    return (<>
        <ProfileNavbar/>
        <form className="container mt-5 limit-width" method="post" onSubmit={handleSubmit}>
            <InputField label="First Name" id="firstName" type="text"/>
            <InputField label="Last Name" id="lastName" type="text"/>
            <InputField label="NIC" id="nic" type="text"/>
            <InputField label="Phone Number" id="phoneNumber" type="tel"/>
            <DropDown label="Gramma Division" id="gramaDivision" options={gramaDivisions}/>
            <fieldset className="p-3 text-start mb-3">
                <legend className="fs-5">Address</legend>
                <InputField label="House Number" id="houseNumber" type="text"/>
                <InputField label="Street Name" id="streetName" type="text"/>
                <InputField label="Suburb Area" id="suburb" type="text"/>
                <InputField label="City" id="city" type="text"/>
            </fieldset>
            <TextArea label="Reason" id="reason"/>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-success form-control">
                    Submit
                </button>
            </div>
        </form>
    </>);
}
export default RequestPage;
