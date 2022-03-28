import React from "react";
import { Service_data } from "../data";
import * as FontAwesome from "react-icons/fa";

const Icon = (props) => {
  const { iconName } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return <div>{icon}</div>;
};

const service = () => {
  return (
    <>
      {Service_data.map((e, i) => {
        return (
          <section className="contanier section grid service-section" key={i}>
            <div className="text-area">
              <h1 className="title">{e.service.title}</h1>
              <h2 className="subtitle">{e.service.subtitle}</h2>
            </div>
            {e.services.map((element, index) => {
              return (
                <div className="service-details" key={index}>
                  <span>
                    <i>
                      <Icon iconName={element.icons} />
                    </i>
                  </span>
                  <h1 className="title">{element.title}</h1>
                  <p className="decs">{element.decs}</p>
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
};

export default service;
