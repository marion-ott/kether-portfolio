//TODO : use styled components rather than inline crappy style.
import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "./../graphql/queries/users";
import Typography from "../components/atoms/typography";
import Theme from "../Theme";
import Nav from "../components/organisms/nav";
import AboutTab from "../components/molecules/about/Tab";

const Picture = styled.div`
  background-color: #c4c4c4;
  width: 241px;
  height: 223px;
`;

const TabContainer = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
`;

function Tabs({ data }) {
  const dataByDate = data.sort((a, b) => b.date - a.date);
  return (
    <>
      {dataByDate.map((entry) => (
        <AboutTab
          key={entry.id}
          isActive={false}
          category={entry.category}
          startDate={entry.startDate}
          endDate={entry.endDate}
          role={entry.role}
          company={entry.company}
        />
      ))}
    </>
  );
}

function Description({ text }) {
  return <Typography size="bodyLarge">{text}</Typography>;
}

function About() {
  const id = "ck9k9jr9n7uoo0923a1mojesl";
  const { loading, error, data } = useQuery(GET_USER, { variables: { id } });

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <>
      <Nav isHome={false} />
      <section
        style={{
          backgroundColor: Theme.colors.main.primary,
          minHeight: "100vh",
          padding: "0px 150px",
        }}
      >
        <Typography width={800} margin size="h1">
          Want to know more about me ?
        </Typography>

        {/* bottom */}
        <div style={{ display: "flex" }}>
          {/* tab */}
          <div style={{ flex: 1 }}>
            <TabContainer>
              <Tabs
                type="work"
                data={data.user.experiences.filter(
                  (el) => el.category === "JOB"
                )}
              />
            </TabContainer>
            <TabContainer>
              <Tabs
                type="formation"
                data={data.user.experiences.filter(
                  (el) => el.category === "EDUCATION"
                )}
              />
            </TabContainer>
          </div>

          {/* pictures */}
          <div style={{ flex: 1, display: "flex" }}>
            {/* left */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                padding: "50px",
              }}
            >
              <Picture />
              <Picture />
            </div>

            {/* right */}
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Picture />
            </div>
          </div>

          {/* description */}
          <div style={{ flex: 1, paddingLeft: "50px" }}>
            <Description text={data.user.bio} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
