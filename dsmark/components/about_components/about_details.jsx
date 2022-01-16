import React from "react";
import { AiFillBook, AiFillTool } from "react-icons/ai";
import * as FontAwesome from "react-icons/fa";

const Icon = (props) => {
  const { iconName, size } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return <div style={{ fontSize: size }}>{icon}</div>;
};

const about_details = ({
  skills,
  education,
  expriances,
  category,
  activeLink,
}) => {
  return (
    <div
      className={
        category[0] == activeLink ? "grid details-area" : "grid detail-info"
      }
    >
      <Detail
        skills={skills}
        education={education}
        expriances={expriances}
        category={category}
        activeLink={activeLink}
      />
    </div>
  );
};

function Detail({ skills, education, expriances, category, activeLink }) {
  if (category[0] == activeLink) {
    return (
      <>
        {skills.map((e, i) => {
          return (
            <div className="skills-tap" key={i}>
              <p className="title">{e.title}</p>
              <Icon iconName={e.icons} size="3rem" />
              <div className="progress-bar">
                <p className="decs">{e.progress}</p>
                <div
                  style={{ width: `${e.progress}` }}
                  className="progress"
                ></div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else if (category[1] == activeLink) {
    return (
      <>
        {education.map((e, i) => {
          return (
            <div className="details-data outer-shadow" key={i}>
              <span>
                <AiFillBook />
              </span>
              <h1 className="title">{e.title}</h1>
              <h2 className="subtitle">{e.subtitle}</h2>
              <p className="decs">{e.decs}</p>
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {expriances.map((e, i) => {
          return (
            <div className="details-data outer-shadow" key={i}>
              <span>
                <AiFillTool />
              </span>
              <h1 className="title">{e.title}</h1>
              <h2 className="subtitle">{e.subtitle}</h2>
              <p className="decs">{e.decs}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default about_details;
