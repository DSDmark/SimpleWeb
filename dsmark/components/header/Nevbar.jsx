import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { GiCowled } from "react-icons/gi";
import Link from "next/link";

const Nevbar = ({ data, hendleNevbar, nevState, hendleLink, activeLink }) => {
  const activeStyle = {
    boxShadow: "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
    color: "#496fe3bf",
  };

  return (
    <nav
      key={i}
      className="nav_bar grid"
      style={nevState ? { right: "100%" } : {}}
    >
      <div
        onClick={() => hendleNevbar(!state)}
        className="menu-icon outer-shadow hover-in-shadow"
      >
        <GiCowled />
      </div>
      <ul className="menu grid">
        <li>
          <Link href={`/${e}`}>
            <a
              style={activeLink == e ? activeStyle : {}}
              onClick={() => hendleLink(e)}
              className="menu_items outer-shadow hover-in-shadow"
            >
              {e}
            </a>
          </Link>
        </li>
      </ul>
      <p className="copyright">
        <AiFillCopyrightCircle />
        2022 resvie by <b>DSmark</b>
      </p>
    </nav>
  );
};

export default Nevbar;
