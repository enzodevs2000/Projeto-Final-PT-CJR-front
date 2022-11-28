import LogoCJR from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      id="NavBar-container"
      className="flex bg-azul-escuro w-full justify-between p-2 text-center text-white font-fonte-padrao font-semibold drop-shadow-xl"
    >
      <div id="navbar-logo" className="w-1/3">
        <img src={LogoCJR} alt="logo" />
      </div>
      <div id="navbar-links" className="w-1/3 flex justify-center items-center">
        <Link to="/membros" className="mr-7 hover:text-btn-login-hover">
          Planos dos membros
        </Link>
        <Link to="/questionarios" className="hover:text-btn-login-hover">
          Questionários
        </Link>
      </div>
      <div
        id="rightCorner-container"
        className="w-1/3 flex justify-center items-center"
      >
        <div id="perfil-container" className="flex justify-between mr-5">
          <div id="username-container" className="mr-3">
            User
          </div>
          <div id="perfil-img-container">perfil img</div>
        </div>
        <div
          id="exit-container"
          className="bg-white text-azul-escuro px-3 py-1 rounded-md hover:bg-btn-login-hover hover:text-white"
        >
          <Link to="/">
            <button>Sair</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
