import Header from "./header";
import "./homepage.css";
import vid from"./vid/video.mp4"
import MyFlipBook from "./flip";
function Homepage() {
  return (
    <>
    <div className="main-container">
      <video src={vid} autoPlay loop muted className="background-video"></video>
    <Header/>
    <MyFlipBook/>
    </div>
    </>
  );
}

export default Homepage;
