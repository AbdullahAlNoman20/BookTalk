import { NavLink } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="mt-52">
            <div className="text-red-500 text-center text-5xl font-extrabold bg-slate-200 p-10 mx-20 rounded-xl">|404| <br /> <span><NavLink to="/"><button className="btn">Go To Home</button></NavLink></span></div>
            
        </div>
    );
};

export default ErrorElement;