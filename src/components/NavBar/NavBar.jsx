import LogoCJR from '../../assets/images/Logo.png';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar__container">
        <div className="NavBar__logo">
          <img src={LogoCJR} alt="logo" />
        </div>
        <div className="NavBar__links">
          <a href="#">Planos dos membros</a>
          <a href="#">Questionário</a>
        </div>
        <div id="rightCorner-container">
            <div id="perfil-container">
                <div id="username-container"></div>
                <div id="perfil-img-container"></div>
            </div>
            <div id="exit-container">
                <button>Sair</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
