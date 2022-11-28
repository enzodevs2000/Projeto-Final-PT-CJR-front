import "./LoginButton.css";
import { Link } from "react-router-dom";
// import handleGoogle from "../../services/handleLoginGoogle"
// import SeePDI from "../../pages/SeePDI.jsx";

function LoginButton() {
  return (
    <div className="flex w-full justify-center">
      {/* <div id="buttonDiv"></div> */}
      
        <Link to="/pdi">
          <button className="bg-azul-escuro text-white p-5 mb-3 rounded-xl font-fonte-padrao hover:bg-btn-login-hover font-semibold">
            Entrar com o Google
          </button>
        </Link>
    </div>
  );
}

export default LoginButton;
