import { Service_data } from "../data";

const service = () => {
  return (
    <>
      {Service_data.forEach((e, i) => {
        {
          console.log(e);
        }
        <div className="grid service-data" key={i}>
          <h1 className="title">{e.service.title}</h1>
          <h2 className="subtitle">{e.service.subtitle}</h2>
          {e.services.map((element, index) => {
            <div className="service-details" key={index}>
              <span></span>
              <h1 className="title">{element.title}</h1>
              <p className="decs">{element.decs}</p>
            </div>;
          })}
        </div>;
      })}
    </>
  );
};

export default service;
