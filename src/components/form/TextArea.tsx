import React from 'react';

interface TextAreaProps {
    id: string;
    label: string;
    disabled?: boolean;
    defaultValue?: string;
}

function TextArea(props: TextAreaProps) {
    return (
        <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a comment here"
                      id={props.id} style={{height: "8rem"}} required={true} disabled={!!props.disabled}
            defaultValue={props.defaultValue}>
            </textarea>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default TextArea;