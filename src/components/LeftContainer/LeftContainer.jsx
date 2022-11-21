import LeftImage from '../../assets/Left_Image.png'
import "./LeftContainer.css"

function LeftContainer() {
  return (
    <div id="left-container">
      <div className="img-container">
        <img src={LeftImage} alt="" />
      </div>
    </div>
  );
}

export default LeftContainer;
