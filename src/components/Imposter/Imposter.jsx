import React from "react";
import "./Imposter.css";

const Imposter = () => {
  return (
    <>
      <div className="imposterWrapper">
        <div className="item content1">
          <h2>IMPOSTER</h2>
          <p className="textImposter1">At times, I feel like an imposter.</p>
          <p className="textImposter2">
            Every year, I will always pick some things to focus on learning.
            Focusing on just enough stuff in a year helped me learn far and
            deep. And as I try new things every year, I feel like an imposter.
          </p>
        </div>
        <hr />
        <div className="item content2">
          <h3>These days, I am immersed in learning about Engineering and Technology</h3>
          <p>
            <span>Web Development.</span> Actually, I enjoy learning programming
            because, in my opinion, millennials nowadays should be aware of
            programming. I'm self-taught in web development, learning through
            YouTube and various reference websites.
          </p>
          <br />
          <p>
            <span>Learning IoT.</span> Being passionate about web development
            has led me to have a strong interest in IoT (Internet of Things). In
            my opinion, for an IoT programmer, having at least a basic
            understanding of web development is essential because these two
            aspects are closely interconnected and cannot be separated.
          </p>
          {/* <br />
          <p>
            <span>Writing.</span> I have been and always will be writing every
            day. It’s a habit that I picked up early in my career. To me,
            writing clarifies my thinking. And these days, I am lucky enough to
            have people who appreciate me for my writing. It’s a dream come
            true.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Imposter;
