//TODO : use styled components rather than inline crappy style.
// TODO : use api

import React from "react";
import Typography from "../components/atoms/typography";
import Theme from "../Theme";
import Nav from "../components/organisms/nav";
import AboutTab from "../components/molecules/about/Tab";

const me = [
  {
    date: "2018-2020",
    name: "UX/UI Designer Assistant",
    place: "Ubisoft",
    type: "work",
  },
  {
    date: "2018 (juillet-septembre)",
    name: " UX/UI Designer",
    place: "Medadom",
    type: "work"
  },
  {
    date: "2017-2020",
    name: " Bachelor Web",
    place: "HeticHetic",
    type: "formation"
  },
  {
    date: "2016-2017",
    name: "L1 Sciences Humaines",
    place: "Université Paris Sorbonne",
    type: "formation"
  },
]

function Tabs({ type }) {
  return (
    <>
      {me.filter((e) => e.type === type).map(({ date, name, place }) => <AboutTab isActive={false} type={type} date={date} name={name} place={place} />)}
    </>
  )
}

function Description() {
  return (
    <Typography size="bodyLarge">Intégration à l’équipe Editioriale du Mobile HQ, supervision et production dans les différents projets du portfolio Ubisoft Mobile Games : Idéation, parcours utilisateur, arborescences, sketching, wireframing, prototypage, conférences et présentations d’outils design et pipeline.

    Intégration à l’équipe Editioriale du Mobile HQ, supervision et production dans les différents projets du portfolio Ubisoft Mobile Games : Idéation,

      Intégration à l’équipe Editioriale du Mobile HQ, supervision et production dans les </Typography>
  )
}

function Picture() {
  return (
    <div style={{ backgroundColor: "#C4C4C4", width: "241px", height: "223px" }}>
      iojoiergjigoj
    </div>
  )
}

function About() {
  return (
    <>
      <Nav isHome={false} />
      <section style={{ backgroundColor: Theme.colors.main.primary, minHeight: "100vh", padding: "0px 150px" }}>

        <Typography width={800} margin size="h1">Want to know more about me ?</Typography>

        {/* bottom */}
        <div style={{ display: "flex" }}>


          {/* tab */}
          <div style={{ flex: 1 }}>

            <div style={{ flex: 1, height: "50%", display: "flex", flexDirection: "column", alignItems: "space-evenly" }}>
              <Tabs type="work" />
            </div>
            <div style={{ flex: 1, height: "50%", display: "flex", flexDirection: "column", alignItems: "space-evenly" }}>
              <Tabs type="formation" />
            </div>
          </div>

          {/* pictures */}
          <div style={{ flex: 1, display: "flex" }}>

            {/* left */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", padding: "50px" }}>
              <Picture />
              <Picture />
            </div>

            {/* right */}
            <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Picture />
            </div>

          </div>

          {/* description */}
          <div style={{ flex: 1, paddingLeft: "50px" }}>
            <Description />
          </div>

        </div>
      </section>
    </>
  )
}

export default About;