import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                 
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  
                 
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
