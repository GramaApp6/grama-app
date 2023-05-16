import React from 'react';

interface FloatingInputProps {
    label: string;
    id: string;
    type: string;
    default?: string;
    disabled?: boolean;
}

function InputField(props: FloatingInputProps) {
    return (
        <div className="form-floating mb-3">
            <input type={props.type} className="form-control" id={props.id} name={props.id}
                   placeholder="###" required={true} disabled={props.disabled} defaultValue={props.default}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default InputField;