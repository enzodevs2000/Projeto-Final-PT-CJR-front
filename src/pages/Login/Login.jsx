import LeftContainer from "../../components/LeftContainer/LeftContainer.jsx";
import RightContainer from "../../components/RightContainer/RightContainer.jsx";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
    return (
        <div className="container flex w-auto h-full justify-between">
           <LeftContainer/>
           <RightContainer/>
            
        </div>           
    )
}

export default Login;