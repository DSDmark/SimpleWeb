import React, { useState } from "react";
import Link from "next/link";
import { GiPirateSkull, GiCowled } from "react-icons/gi";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Header = () => {
  const menuItems = ["home", "contact", "about", "protfolio", "testimonial"];

  const [state, setstate] = useState(true);
  const [linkState, setlink] = useState("home");

  return (
    <>
      <header className="header container">
        <div className="header_data grid">
          <div className="logo">
            <Link href="index">
              <a>DS</a>
            </Link>
          </div>
          <div className="menu-icon">
            <Link href="#">
              <a
                onClick={() => setstate(!state)}
                className="outer-shadow hover-in-shadow"
              >
                <GiPirateSkull />
              </a>
            </Link>
          </div>
        </div>
        <nav className="nav_bar grid" style={state ? { right: "100%" } : {}}>
          <div
            onClick={() => setstate(!state)}
            className="menu-icon outer-shadow hover-in-shadow"
          >
            <GiCowled />
          </div>
          <ul className="menu grid">
            {menuItems.map((e, i) => {
              return (
                <li key={i}>
                  <Link href={`/${e}`}>
                    <a
                      style={
                        linkState == e
                          ? {
                              boxShadow:
                                "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
                              color: "#496fe3bf",
                            }
                          : {}
                      }
                      onClick={() => setlink(e)}
                      className="menu_items outer-shadow hover-in-shadow"
                    >
                      {e}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="copyright">
            <AiFillCopyrightCircle />
            2022 resvie by <b>DSmark</b>
          </p>
        </nav>
      </header>
    </>
  );
};

export default Header;
