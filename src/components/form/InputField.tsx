import React from 'react';

interface FloatingInputProps {
    label: string;
    id: string;
    type: string;
}
function InputField(props: FloatingInputProps) {
    return (
        <div className="form-floating mb-3">
            <input type={props.type} className="form-control" id={props.id} name={props.id}
                   placeholder="###" required={true}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default InputField;