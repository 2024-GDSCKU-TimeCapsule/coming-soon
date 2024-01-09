import image13 from "./images/image-13.png";
import image12 from "./images/image-12.png";
import image15 from "./images/image-15.png";
import group904 from "./images/group-904.png";
import group804 from "./images/group-804.png";
import line75 from "./images/line-75.svg";
import "./App.css";

function App() {
  return (
    <div id="page">
      <img src={image13} id="image-13" />
      <img src={image12} id="image-12" />
      <img src={image15} id="image-15" />
      <img src={group904} id="group-904" />
      <img src={group804} id="group-804" />
      {/* <img src={line75} id="line-75" /> */}
    </div>
  );
}

export default App;
