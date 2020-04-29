import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "./../graphql/queries/users";
import Typography from "../components/atoms/typography";
import Nav from "../components/organisms/nav";
import Theme from "../Theme";
import { useForm } from "react-hook-form";
import Input from "../components/atoms/input";

import Styled from "styled-components";

const Section = Styled.section`
  display: flex;
  padding: 50px 150px;
  min-height: 100vh;
  width: 100%;
  background-color: ${Theme.colors.main.primary};
`;

const StyledForm = Styled.form`
  width: 600px;
`;

function Contact() {
  const id = "ck9k9jr9n7uoo0923a1mojesl";
  const { loading, error, data } = useQuery(GET_USER, { variables: { id } });

  const { handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <>
      <Nav />
      <Section>
        <div>
          <Typography width={800} margin size="h1">
            Want to get in touch? ping me
          </Typography>

          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography width={200} margin size="label">
              What is your name ?
            </Typography>
            <Input size="halfWidth" name="example" />

            <Typography width={200} margin size="label">
              Your email
            </Typography>
            <Input size="halfWidth" name="bla" />

            <Typography margin size="label">
              Subject
            </Typography>
            <Input size="fullWidth" name="blou" />

            <Typography margin size="label">
              Your message
            </Typography>
            <Input size="textArea" name="example2" />
            {errors.example2 && <span>This field is required</span>}

            <input
              style={{
                backgroundColor: "white",
                height: "50px",
                width: "110px",
                color: "black",
              }}
              type="submit"
            />
          </StyledForm>
        </div>
        <div>
          <Typography margin size="body">
            {data.user.firstName} {data.user.lastName}
          </Typography>
          <Typography size="body">{data.user.address}</Typography>
          <Typography size="body">
            {data.user.city}, {data.user.zipCode}
          </Typography>
          <Typography margin size="body">
            +33 {data.user.phone}, {data.user.email}
          </Typography>
        </div>
      </Section>
    </>
  );
}

export default Contact;
