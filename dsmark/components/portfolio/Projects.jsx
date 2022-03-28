import Image from "next/image";

const Projects = (data) => (
  <div className="portfolio-contant grid">
    {data.data.map((e, i) => (
      <div className="portfolio-details" key={i}>
        <Image
          className="portfolio_img"
          src={e.url}
          width={e.width}
          height={e.height}
          alt={e.alt}
        />
        <h1 className="subtitle">{e.title}</h1>
      </div>
    ))}
  </div>
);

export default Projects;
