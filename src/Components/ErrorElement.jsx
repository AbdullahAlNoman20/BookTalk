import { NavLink } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h1>404 Page Not Fount</h1>
            <NavLink to="/">Go To Home</NavLink>
        </div>
    );
};

export default ErrorElement;