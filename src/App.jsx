import "./App.css";
import Description from "./components/Description/Description";
import Description2 from "./components/Description2/Description2";
import Intro from "./components/Intro/Intro";
import Myproject from "./components/MyProject/Myproject";
import Experience from "./components/Experience/Experience";
import Storyteller from "./components/Storyteller/Storyteller";
import Socialmedia from "./components/Socialmedia/Socialmedia";
import Imposter from "./components/Imposter/Imposter";
import Contact from "./components/Contact/Contact";
import Runningtext from "./components/Runningtext/Runningtext";

function App() {
  return (
    <>
      <div className="main">
        <div className="landingPage">
          <Intro />
        </div>
        <div className="myProfile">
          <Description />
          {/* <Myproject /> */}
          {/* <Myproject /> */}
          <hr />
          <Experience />
        </div>
        <div className="myProfile2">
          <Description2 />
          {/* <Myproject /> */}
          {/* <Myproject /> */}
        </div>
        <div className="StoryTeller">
          {/* <Storyteller /> */}
          {/* <Socialmedia /> */}
        </div>
        <div className="imposter">
          <Imposter />
        </div>
        <div className="contact">
          <Contact />
        </div>
        <div>
          <Runningtext/>
        </div>
      </div>
    </>
  );
}

export default App;
