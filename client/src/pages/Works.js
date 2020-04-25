import React from "react";
import Typography from "../components/atoms/typography";

import Card from "../components/organisms/card";
import CardTitle from "../components/organisms/card/card-title";
import CardSubtitle from "../components/organisms/card/card-subtitle";
import Nav from "../components/organisms/nav";
import { Link } from "react-router-dom";
import theme from "../theme";

function CardComp({name, place, link}) {
  return (
    <Link style={{ color: theme.colors.main.secondary, textDecoration: "none" }} to={`/work/${link}`}>
      <Card>
        <CardTitle>
          <Typography size="h2">
            {name}
            </Typography>
        </CardTitle>
        <CardSubtitle>
          <Typography size="body">
            {place}
            </Typography>
        </CardSubtitle>
      </Card>
    </Link>
  )
}

function Works() {
  return (
    <>
      <Nav />
      <section style={{ padding: "150px", minHeight: "100vh", width: "100%", backgroundColor: theme.colors.main.primary,  display: "flex", justifyContent:"space-around" }}>
        <CardComp name="Tom Clancy’s EliteSquad" place="Ubisoft" link="elite-squad"/>
        <CardComp name="Hungry Sharks" place="Ubisoft" link="hungry-sharks"/>
        <CardComp name="Xenos" place="Hetic" link="xenos"/>
      </section>
    </>
  )
}

export default Works;