import React from 'react';

export interface Option {
    divisionId: number;
    divisionName: string;
}
interface DropDownProps {
    label: string;
    id: string;
    options: Option[];
}

function DropDown(props:DropDownProps) {
    return (
        <div className="form-floating mb-3">
            <select className="form-select" id={props.id} aria-label="Floating label select example" required={true}>
                {props.options.map((option) => {
                    return <option key={option.divisionId} value={option.divisionId}>{option.divisionName}</option>
                })}
            </select>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default DropDown;