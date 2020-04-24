import React from "react";
import theme from "../theme";
import img from "../elite-squad.png";
import prev from "../preview.png";
import Typography from "../components/atoms/typography";

function workHeader() {
  return (
    <header style={{ display: "flex", border: "2px dotted blue", justifyContent: "center", alignItems: "center", position: "relative", paddingTop: "150px" }}>
      <div style={{ backgroundColor: theme.colors.project.green, width: "100%", height: "325px", position: "absolute", top:"0", zIndex: 0 }}></div>

      <img src={img} alt={"img-alt"} style={{ height: "500px", border: "2px solid blue", zIndex: "1" }} />

      <div style={{ border: "2px solid blue", height: "500px", width: "500px", zIndex: "1" }}>

        <div style={{ width: "100%", border: "2px solid yellow" }}>
          <Typography size="h1">Tom Clancy’s EliteSquad</Typography>
          <Typography size="label">Ubisoft</Typography>
        </div>


        <div style={{ border: "3px solid pink", display: "flex" }}>
          <div style={{ border: "2px solid green", width: "50%", height: "250px" }}>
            <Typography size="label">Skill</Typography>
            <Typography size="body">Art Direction</Typography>
            <Typography size="body">UI design</Typography>
            <Typography size="body">Motion design</Typography>
          </div>

          <div style={{ border: "2px solid red", width: "50%", height: "250px" }}>
            <Typography size="label">Softwares</Typography>
            <Typography size="body">Ps</Typography>
            <Typography size="body">Ae</Typography>
          </div>
        </div>
      </div>
    </header>
  )
}

function workDescription() {
  return (
    <div style={{ height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "200px" }}>
      <Typography size="body">
        Tom Clancy’s EliteSquad est un jeu vidéo mobile RPG à univers militaire développé par Owlient et édité par Ubisoft. Le joueur peut collectionner et partir en mission avec les différents personnages de la franchise Tom Clancy dans des combats en temps réel.
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
  return (
    <>
      <section style={{ backgroundColor: theme.colors.main.primary, minHeight: "100vh" }}>
        {workHeader()}
        {workDescription()}
        {workPreview()}
        {workDescription()}
      </section>
    </>
  )
}

export default Work;