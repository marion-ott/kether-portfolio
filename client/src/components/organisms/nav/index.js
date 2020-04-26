import React from "react";
import Typography from "../../atoms/typography";
import Theme from "../../../Theme";
import { Link } from "react-router-dom";
import NavButton from "../../atoms/navButton";

import NavWrapper from "./nav-wrapper";


function Nav({ isHome = false }) {
  return (
    <NavWrapper>
      <div>
        {isHome ?
          <Typography size="h1">Valentine Leroy</Typography>
          :
          <Typography size="h3">
            <Link style={{ color: Theme.colors.main.secondary, textDecoration: "none" }} to="/">Valentine Leroy</Link>
          </Typography>}

      </div>
      <div style={{ minWidth: "calc(180px * 2)", width: "calc(180px * 2)", display: "flex", flexWrap: "wrap" }}>
        <Link to="/works">
          <NavButton position="topLeft">
            <Typography size="label">Works</Typography>
          </NavButton>
        </Link>

        <Link to="/about">
          <NavButton position="topRight">
            <Typography size="label">About</Typography>
          </NavButton>
        </Link>

        <Link to="">
          <NavButton position="bottomLeft">
            <Typography size="label" />
          </NavButton>
        </Link>

        <Link to="/contact">
          <NavButton position="bottomRight">
            <Typography size="label">Contact</Typography>
          </NavButton>
        </Link>
      </div>
    </NavWrapper>
  )
}

export default Nav;