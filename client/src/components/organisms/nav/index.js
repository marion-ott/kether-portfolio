import React from "react";
import Typography from "../../atoms/typography";
import theme from "../../../theme";
import { Link } from "react-router-dom";

function Menu({ label = "", link }) {
  return (
    <Link to={link}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minWidth: "180px", minHeight: "100px", border: "2px solid white" }}>
        <Typography size="label">{label}</Typography>
      </div>
    </Link>
  )
}

function Nav({ isHome = false }) {
  return (
    <nav style={{ padding: "50px 150px", backgroundColor: theme.colors.main.primary, width: "100%", display: "flex", justifyContent: "space-between" }}>
      {/* ID */}
      <div>
        {isHome ?
          <Typography size="h1">Valentine Leroy</Typography>
          :
          <Typography size="h3">Valentine Leroy</Typography>}

      </div>
      {/* menu */}
      <div style={{ width: "calc(180px * 2)", display: "flex", flexWrap: "wrap" }}>
        <Menu label="Works" link="/works" />
        <Menu label="About" link="about" />
        <Menu />
        <Menu label="Contact" link="contact" />
      </div>
    </nav>
  )
}

export default Nav;