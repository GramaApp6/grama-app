import React from 'react';

export interface Option {
    key: string;
    value: string;
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
                    return <option key={option.key} value={option.key}>{option.value}</option>
                })}
            </select>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default DropDown;