import React from "react";
import Typography from "../../atoms/typography";
import theme from "../../../theme";
import { Link } from "react-router-dom";

function Menu({ position, label = "", link }) {

  const positions = {
    topLeft: {
      borderTop: "2px solid white",
      borderBottom: "2px solid white",
      borderLeft: "2px solid white",
    },

    topRight: {
      borderTop: "2px solid white",
      borderBottom: "2px solid white",
      borderLeft: "2px solid white",
      borderRight: "2px solid white",
    },

    bottomRight: {
      borderBottom: "2px solid white",
      borderLeft: "2px solid white",
      borderRight: "2px solid white",
    },
    bottomLeft: {

    }
  }

  return (
    <Link style={{ color: theme.colors.main.secondary, textDecoration: "none" }} to={link}>
      <div style={{
        borderTop: positions[position].borderTop,
        borderBottom: positions[position].borderBottom,
        borderLeft: positions[position].borderLeft,
        borderRight: positions[position].borderRight, display: "flex", justifyContent: "center", alignItems: "center", minWidth: "180px", minHeight: "100px"
      }}>
        <Typography size="label">{label}</Typography>
      </div>
    </Link >
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
          <Typography size="h3"><Link style={{ color: theme.colors.main.secondary, textDecoration: "none" }} to="/">Valentine Leroy</Link></Typography>}

      </div>
      {/* menu */}
      <div style={{ width: "calc(180px * 2)", display: "flex", flexWrap: "wrap" }}>
        <Menu position="topLeft" label="Works" link="/works" />
        <Menu position="topRight" label="About" link="about" />
        <Menu position="bottomLeft" />
        <Menu position="bottomRight" label="Contact" link="contact" />
      </div>
    </nav>
  )
}

export default Nav;