import "./Runningtext.css";

const Runningtext = () => {
  return (
    <>
      <div className="top">
        <marquee direction="left">
          Muhammad Emir Al Hafidz Universitas Negeri Yogyakarta
        </marquee>
      </div>
      <div className="bottom">
        <marquee behavior="" direction="right">
          Muhammad Emir Al Hafidz Universitas Negeri Yogyakarta
        </marquee>
      </div>
    </>
  );
};

export default Runningtext;
