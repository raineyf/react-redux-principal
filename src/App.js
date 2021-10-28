import "./App.scss";
import Form from "./components/Form.js";
import { useSelector } from "react-redux";

function App() {
    const principal = useSelector((state) => state.principal.value);
    return (
        <div className="app-container">
            <h1>Simple Interest Calculator</h1>
            <Form label="Calculate Your Total Principal" />
            <div aria-live="polite">
                {isNaN(principal.calculation) ? (
                    <p>
                        Please ensure that all fields only contain numeric
                        characters
                    </p>
                ) : (
                    <p>Calculated Principal: ${principal.calculation}</p>
                )}
            </div>
        </div>
    );
}

export default App;
