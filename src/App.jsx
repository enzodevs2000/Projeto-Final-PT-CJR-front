import RoutesTo from "./routes/RoutesTo.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import { Modal } from "react-modal";

// Modal.setAppElement("#root");

function App() {
  return (
    <Router>
      <div className=" bg-clr-login w-full h-full mx-auto">
        <RoutesTo />
      </div>
    </Router>
  );
}

export default App;
