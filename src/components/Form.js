import React, { useState } from "react";
import FormField from "./FormField.js";
import { useDispatch } from "react-redux";
import { calculatePrincipal } from "../features/principal.js";
function Form(props) {
    const [principalVal, setPrincipalVal] = useState("");
    const [rateVal, setRateVal] = useState("");
    const [yearsVal, setYearsVal] = useState("");

    const handlePrincipalChange = (e) => {
        setPrincipalVal(e.target.value);
    };
    const handleRateChange = (e) => {
        setRateVal(e.target.value);
    };
    const handleYearsChange = (e) => {
        setYearsVal(e.target.value);
    };

    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(
            calculatePrincipal({
                principal: principalVal,
                rate: rateVal,
                years: yearsVal,
            })
        );
    };

    return (
        <form aria-labelledby="form-legend" onSubmit={handleFormSubmit}>
            <fieldset>
                <legend id="form-legend">{props.label}</legend>
                <FormField
                    id="principal"
                    label="Principal"
                    type="tel"
                    placeholder="For example, 5000 (for $5,000)"
                    onChange={handlePrincipalChange}
                    value={principalVal}
                />
                <FormField
                    id="rate"
                    label="Rate of Annual Interest"
                    type="tel"
                    placeholder="For example, 2.5 (for 2.5%)"
                    onChange={handleRateChange}
                    value={rateVal}
                />
                <FormField
                    id="years"
                    label="Number of Years"
                    type="tel"
                    onChange={handleYearsChange}
                    value={yearsVal}
                />
                <button type="submit">Calculate Principal</button>
            </fieldset>
        </form>
    );
}

export default Form;
