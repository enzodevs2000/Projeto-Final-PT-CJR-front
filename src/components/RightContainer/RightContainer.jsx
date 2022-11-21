import Banner from "../../assets/Banner.png";
import LoginButton from "../LoginButton/LoginButton"
import "./RightContainer.css"

function RightContainer() {
  return (
    <div id="right-container">
      <div className="img-container">
        <img src={Banner} alt="" />
      </div>
      <LoginButton/>
    </div>
  );
}

export default RightContainer;
