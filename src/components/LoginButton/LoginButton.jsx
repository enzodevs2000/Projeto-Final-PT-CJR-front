import "./LoginButton.css"
// import handleGoogle from "../../services/handleLoginGoogle"

function LoginButton() {
  return (
    <div  className="flex w-full justify-center">
      {/* <div id="buttonDiv"></div> */}
      <button className="bg-btn-login text-white p-5 mb-3 rounded-xl font-btn-login hover:bg-btn-login-hover">Entrar com o google</button>
    </div>
  );
}

export default LoginButton;