import "./Intro.css";

export default function Mainpage() {
  return (
    <>
      <div className="profileWrapper">
        <div>Emir,</div>
        <div>IoT Enthusiast,</div>
        <div>Engineering Lover,</div>
        <div>Tech Enthusiast</div>
      </div>
      <div className="profileDescription">
        <p>
          Emir Al Hafidz, a freshgraduate in electronics engineering, is enthusiastic about
          technology, specializing in IoT and Electrical
          Engineering.
        </p>
      </div>
      <marquee direction="down" scrolldelay="500" className="scrollTextWrapper">
        <div>Scroll Down</div>
        <div>スクロールダウン</div>
        <div>قم بالتمرير لأسفل</div>
      </marquee>
    </>
  );
}
