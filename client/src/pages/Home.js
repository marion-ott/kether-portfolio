import React from "react";
import Card from "../components/organisms/card";
import CardTitle from "../components/organisms/card/card-title";
import CardSubtitle from "../components/organisms/card/card-subtitle";
import Typography from "../components/atoms/typography";


function Home() {
  return (
    <>
      <h2>Home</h2>
      <Card>
        <CardTitle>
          <Typography size="h2">
            Tom Clancy’s EliteSquad
            </Typography>
        </CardTitle>
        <CardSubtitle>
          <Typography size="body">
            Ubisoft
            </Typography>
        </CardSubtitle>
      </Card>
    </>
  );
}

export default Home;
