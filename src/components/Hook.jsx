import { useState } from "react";
import "./Hook.css";
import image1 from "../components/MAX.png";
import image2 from "../components/FOX.png";
import image3 from "../components/IPX8.png";

function App() {
  const name = "Kingsley";

  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 3000);

  return (
    <div>
      {show && (
        <div className="grid">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
