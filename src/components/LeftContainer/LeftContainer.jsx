import LeftImage from '../../assets/Left_Image.png'

function LeftContainer() {
  return (
    <div id="left-container" className="flex w-2/5 h-full">
      <div className="w-full h-full">
        <img className="w-full h-full" src={LeftImage} alt="" />
      </div>
    </div>
  );
}

export default LeftContainer;
