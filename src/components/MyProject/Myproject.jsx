import "./Myproject.css";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";

export default function Myproject() {
  return (
    <>
      <div className="projectContainer">
        <div className="project">
          <img className="projectImg" src={project1} alt="" />
          <div className="text1">
            Stop the Churn, Stop the Burn: New Offers Experience
          </div>
          <div className="text2">
            Improving the likeliness of conversion by making discounts more
            achievable and less demanding.
          </div>
          <div className="viewDetailBtn">View Details > </div>
        </div>
        <div className="project">
          <img className="projectImg" src={project2} alt="" />
          <div className="text1">
            Stop the Churn, Stop the Burn: New Offers Experience
          </div>
          <div className="text2">
            Improving the likeliness of conversion by making discounts more
            achievable and less demanding.
          </div>
          <div className="viewDetailBtn">View Details > </div>
        </div>
      </div>
    </>
  );
}
