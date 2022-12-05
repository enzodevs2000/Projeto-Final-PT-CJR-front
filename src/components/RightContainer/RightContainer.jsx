import Banner from "../../assets/Banner.png";
import LoginButton from "../LoginButton/LoginButton.jsx";

function RightContainer() {
  return (
    <div id="right-container" className="flex items-center flex-col w-2/4 h-full justify-center">
      <div className="flex w-full h-full justify-center">
        <img className="h-5/6" src={Banner} alt="" />
      </div>
      <LoginButton />
    </div>
  );
}

export default RightContainer;
