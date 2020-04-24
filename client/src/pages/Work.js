//TODO : use styled components rather than inline crappy style.

import React from "react";
import { useParams } from "react-router-dom";
import theme from "../theme";
import img from "../elite-squad.png";
import prev from "../preview.png";
import Typography from "../components/atoms/typography";


function workHeader(name, company, skills, softwares) {
  return (
    <header style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", paddingTop: "125px" }}>
      <div style={{ backgroundColor: theme.colors.project.green, width: "100%", height: "325px", position: "absolute", top: "0", zIndex: 0 }}></div>

      <img src={img} alt={"img-alt"} style={{ height: "300px", zIndex: "1", position: "relative", top: "-140px", left: "-160px" }} />

      <div style={{ height: "500px", width: "500px", zIndex: "1" }}>

        <div style={{ width: "100%", height: "250px" }}>
          <Typography size="h1">{name}</Typography>
          <Typography size="label">{company}</Typography>
        </div>


        <div style={{ display: "flex", height: "250px" }}>
          <div style={{ width: "50%", height: "250px" }}>
            <Typography size="h4">Skills</Typography>
            {skills.map((skill, i) => <Typography key={i} size="body">{skill}</Typography>)}
          </div>

          <div style={{ width: "50%", height: "250px" }}>
            <Typography size="h4">Softwares</Typography>
            {softwares.map((software, i) => <Typography key={i} size="body">{software}</Typography>)}
          </div>
        </div>
      </div>
    </header>
  )
}

function workDescription(description) {
  return (
    <div style={{ height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "200px" }}>
      <Typography size="bodyLarge">
        {description}
      </Typography>
    </div>
  )
}

function workPreview() {
  return (
    <div style={{ witdh: "100%", height: "100vh" }}>
      <img style={{ objectPosition: "center", width: "100%", height: "100%", objectFit: "cover" }} src={prev} alt={"img-alt"} />
    </div>
  )
}

function Work() {
  const { projectName } = useParams();
  console.log(projectName);
  // TODO : For testing purpose only, use api instead
  const data = {
    eliteSquad: {
      name: "Tom Clancy’s EliteSquad",
      company: "Ubisoft",
      skills: ["Art Direction", "UI design", "Motion design"],
      softwares: ["Ps", "Ae"],
      description: "Tom Clancy’s EliteSquad est un jeu vidéo mobile RPG à univers militaire développé par Owlient et édité par Ubisoft. Le joueur peut collectionner et partir en mission avec les différents personnages de la franchise Tom Clancy dans des combats en temps réel.",
    }
  }
  const { eliteSquad: { name, company, skills, softwares, description } } = data;

  return (
    <>
      <section style={{ backgroundColor: theme.colors.main.primary, minHeight: "100vh" }}>
        {workHeader(name, company, skills, softwares)}
        {workDescription(description)}
        {workPreview()}
        {workDescription(description)}
      </section>
    </>
  )
}

export default Work;