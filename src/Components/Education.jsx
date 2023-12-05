import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      {/* grid of 4 education cells */}
      <div
        className="grid container"
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "1rem auto",
          textAlign: "center",
        }}
      >
        {/* education cell */}
        <div className="box">
          <h3>Indian Institute of Information Technology Lucknow</h3>
          <p>Bachelors of Engineering in Computer Science</p>
          <p>December 2022 - Present</p>
        </div>
        <div className="box">
          <h3>Udemy</h3>
          <p>Full Stack Web Development By Angela Yu</p>
          <p>January 2023 - February 2023</p>
        </div>
        {/* education cell */}
        <div className="box">
          <h3>Narayana Junior College</h3>
          <p>CBSE Board - PCM</p>
          <p>August 2020 - June 2022</p>
        </div>
        {/* education cell */}
        <div className="box">
          <h3>Narayana Olympiad School</h3>
          <p>Telangana State Board</p>
          <p>August 2019 - June 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
