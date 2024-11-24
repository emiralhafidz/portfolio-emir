import "./Description.css";
import {Link} from 'react-router-dom'
const Description = () => {
  return (
    <div className="myDescription">
      <h2>Experience</h2>
      <p className="textDescription1">
        Proficient in utilizing frameworks such as React.js, I've also delved
        into the world of server-side development with a grasp on Node.js and
        Express.js.
      </p>
      <p className="textDescription2">
        Developed a ground control station web application using React.js for the
        frontend, Node.js for the backend, MySQL for the database, MQTT protocol
        for UAV monitoring communication, Kafka for data streaming, deployed on
        Alibaba Cloud or Google Cloud Platform, including simple PCB design and
        Arduino programming with the ESP8266 microcontroller.
      </p>
         <a className="linkProject" href="https://emir-gcs.vercel.app/">Click Here</a>
      <br />
      <br />
    </div>
  );
};
export default Description;
