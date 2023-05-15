import React, {useState} from 'react';

import ProfileNavbar from "../components/ProfileNavbar";
import InputField from "../components/form/InputField.tsx";
import TextArea from "../components/form/TextArea.tsx";
import DropDown, {Option} from "../components/form/DropDown.tsx";
import {GramaCertificateRequest} from "../types";
import {useAuthContext} from "@asgardeo/auth-react";


function RequestPage() {
    const [gramaDivisions, setGramaDivisions] = useState<Option[]>([]);
    const {httpRequest} = useAuthContext();

    console.log("gramaDivisions", gramaDivisions);
    const getGramaDivisions = ()  => {
        httpRequest({
            headers: {
                "Accept" : "application/json"
            },
            method: "GET",
            url: "https://c797a448-6b78-43cc-b089-fcc4e8df8937-dev.e1-us-east-azure.choreoapis.dev/yjoh/gramaappbackend/endpoint-9091-6c0/1.0.0/all_grama_divisions",
            attachToken: true
        }).then((data) => {
            setGramaDivisions(data.data);
        }).catch((err):Option[] => {
            console.log(err);
            setGramaDivisions( [
                {
                    divisionId: -1,
                    divisionName: "Cannot Load Grama Divisions"
                }
            ]);
        })
    }


    React.useEffect(() => {
        getGramaDivisions();
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
