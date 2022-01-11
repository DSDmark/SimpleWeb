import { useState } from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { BsStackOverflow, BsDiscord } from "react-icons/bs";
import { About_data } from "../data";

import About_details from "./about_components/about_details";

const about = () => {
  const [state, setstate] = useState("skills");

  return (
    <>
      <section className="section about_section container">
        {About_data.map((e, i) => {
          return (
            <>
              <div className="about_data grid" key={i}>
                <div className="about_content">
                  <div className="about_img">
                    <img src={e.about.img.url} alt={e.about.img.alt} />
                  </div>
                  <div className="about_icons">
                    <Link href="#">
                      <a className="hover-in-shadow">
                        <AiFillGithub />
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="hover-in-shadow">
                        <AiFillInstagram />
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="hover-in-shadow">
                        <SiFiverr />
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="hover-in-shadow">
                        <BsStackOverflow />
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="hover-in-shadow">
                        <BsDiscord />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="about_details">
                  <h1 className="title">{e.about.title}</h1>
                  <h2 className="subtitle">{e.about.subtitle}</h2>
                  <p className="decs">
                    <b> Youth is a lie. It is nothing but evil. </b>
                    {e.about.decs} <b>Drop dead.</b>
                  </p>
                  <button className="button">download cv</button>
                </div>
              </div>
              <div className="grid category-area">
                <ul className="about_details-menu">
                  {e.category.map((e, i) => {
                    return (
                      <li
                        style={
                          state == e
                            ? {
                                boxShadow:
                                  "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
                                color: "#496fe3bf",
                              }
                            : {}
                        }
                        key={i}
                        onClick={() => setstate(e)}
                        className="menu-items button"
                      >
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <About_details
                activeLink={state}
                category={e.category}
                skills={e.skills}
                education={e.education}
                expriances={e.expriances}
              />
            </>
          );
        })}
      </section>
    </>
  );
};

export default about;
