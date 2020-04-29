import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_WORK } from "./../graphql/queries/works";
import Theme from "../Theme";
import img from "../elite-squad.png";
import prev from "../preview.png";
import Typography from "../components/atoms/typography";
import TitleGroup from "../components/molecules/card/TitleGroup";

function workHeader(name, company, skills, softwares) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: "125px",
      }}
    >
      <div
        style={{
          backgroundColor: Theme.colors.project.green,
          width: "100%",
          height: "325px",
          position: "absolute",
          top: "0",
          zIndex: 0,
        }}
      ></div>

      <img
        src={img}
        alt={"img-alt"}
        style={{
          height: "300px",
          zIndex: "1",
          position: "relative",
          top: "-140px",
          left: "-160px",
        }}
      />

      <div style={{ height: "500px", width: "500px", zIndex: "1" }}>
        <TitleGroup title={name} titleSize="h1" subtitle={company} />

        <div style={{ display: "flex", height: "250px" }}>
          <div style={{ width: "50%", height: "250px" }}>
            <Typography margin size="h4">
              Skills
            </Typography>
            {skills.map((skill, i) => (
              <Typography key={i} size="body">
                {skill}
              </Typography>
            ))}
          </div>

          <div style={{ width: "50%", height: "250px" }}>
            <Typography margin size="h4">
              Softwares
            </Typography>
            {softwares.map((software, i) => (
              <Typography key={i} size="body">
                {software}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function workDescription(description) {
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "200px",
      }}
    >
      <Typography size="bodyLarge">{description}</Typography>
    </div>
  );
}

function workPreview() {
  return (
    <div style={{ witdh: "100%", height: "100vh" }}>
      <img
        style={{
          objectPosition: "center",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={prev}
        alt={"img-alt"}
      />
    </div>
  );
}

function Work() {
  const { projectId } = useParams();
  const { loading, error, data } = useQuery(GET_WORK, {
    variables: { id: projectId },
  });

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <>
      <section
        style={{
          backgroundColor: Theme.colors.main.primary,
          minHeight: "100vh",
        }}
      >
        {workHeader(
          data.work.title,
          data.work.organization,
          data.work.skills,
          data.work.softwares
        )}
        {workDescription(data.work.description)}
        {workPreview()}
        {workDescription(data.work.description)}
      </section>
    </>
  );
}

export default Work;
