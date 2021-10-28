import React from "react";

function FormField(props) {
    return (
        <div className="form-row">
            <label htmlFor={props.id}>{props.label}:</label>
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder || ""}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
}

export default FormField;
