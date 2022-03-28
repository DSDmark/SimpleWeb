import React, { useState } from "react";
import { Portfolio_data } from "../../data";
import Categorys from "./Categorys";
import Projects from "./Projects";

const Portfolio = () => {
  const [data, setdata] = useState("ASGames");

  return (
    <>
      {Portfolio_data.map((e, i) => (
        <div key={i} className="container portfolio-section section">
          <h1 className="title">{e.headings.title}</h1>
          <h2 className="subtitle">{e.headings.subtitle}</h2>
          <Categorys
            data={e.categorys}
            hendleCategory={setdata}
            activeMenu={data}
          />
          <Projects data={e.projects.filter((e) => e.category === data)} />
        </div>
      ))}
    </>
  );
};

export default Portfolio;
