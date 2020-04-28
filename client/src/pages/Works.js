import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_WORKS } from "./../graphql/queries/works";

import Card from "../components/organisms/card";
import Nav from "../components/organisms/nav";
import { Link } from "react-router-dom";
import Theme from "../Theme";
import TitleGroup from "../components/molecules/card/TitleGroup";

function CardComp({ name, place, link }) {
  return (
    <Link
      style={{ color: Theme.colors.main.secondary, textDecoration: "none" }}
      to={`/work/${link}`}
    >
      <Card>
        <TitleGroup title={name} titleSize="h2" subtitle={place} />
      </Card>
    </Link>
  );
}

function Works() {
  const { loading, error, data } = useQuery(GET_WORKS);

  return (
    <>
      <Nav />
      <section
        style={{
          padding: "150px",
          minHeight: "100vh",
          width: "100%",
          backgroundColor: Theme.colors.main.primary,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <CardComp
          name="Tom Clancy’s EliteSquad"
          place="Ubisoft"
          link="elite-squad"
        />
        <CardComp name="Hungry Sharks" place="Ubisoft" link="hungry-sharks" />
        <CardComp name="Xenos" place="Hetic" link="xenos" />
      </section>
    </>
  );
}

export default Works;
