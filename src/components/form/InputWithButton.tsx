import React, {MouseEventHandler, useEffect, useState} from 'react';

interface InputWithButtonProps {
    label: string,
    id: string,
    onClick?: MouseEventHandler,
    value: string,
    disabled?: boolean,
    disableButton?: boolean
}

function InputWithButton(props: InputWithButtonProps) {
    const [data, setData] = useState<InputWithButtonProps>({
        id: "",
        label: "",
        value: ""

    });

    useEffect(() => {
        setData(props);
    }, [props])

    return (
        <div className="input-group mb-3">
            <div className="form-floating">
                <input type="text" className="form-control" id={data.id} name={data.id}
                       placeholder="###" required={true} disabled={data.disabled} defaultValue={data.value}/>
                <label htmlFor={data.id}>{data.label}</label>
            </div>
            <button className="btn btn-outline-success" type="button" onClick={data.onClick}
                    disabled={data.disableButton}>Check
            </button>
        </div>
    );
}

export default InputWithButton;