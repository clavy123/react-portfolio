import React from "react";
import data from "../data/data.json";

const TimeLine = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.experience.map((item, index) => (
          <TimelineItem
            role={item.role}
            company={item.company}
            reponsibilites = {item.reponsibilites}
            tech = {item.TechStack}
            date={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({role,company,reponsibilites,tech,date,index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <p>Date: {date}</p>
      <h2>Role : {role}</h2>
      <h3>Company: {company}</h3>
      <h4>Work: {reponsibilites}</h4>
      <h5>Tech: {tech}</h5>
    </div>
  </div>
);

export default TimeLine;