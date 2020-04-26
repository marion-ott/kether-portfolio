import React from "react";
import Typography from "../components/atoms/typography";
import Nav from "../components/organisms/nav";
import Theme from "../Theme";
import { useForm } from 'react-hook-form'
import Input from "../components/atoms/input";

import Styled from "styled-components";

const StyledForm = Styled.form`
  width: 600px;
`;


function Contact() {
  const { handleSubmit, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <>
      <Nav />
      <section style={{ padding: "50px 150px", minHeight: "100vh", width: "100%", backgroundColor: Theme.colors.main.primary }}>
        <Typography width={800} margin size="h1">Want to get in touch? ping me</Typography>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Typography width={200} margin size="label">What is your name ?</Typography>
          <Input size="halfWidth" name="example" />

          <Typography width={200} margin size="label">Your email</Typography>
          <Input size="halfWidth" name="bla" />

          <Typography margin size="label">Subject</Typography>
          <Input size="fullWidth" name="blou" />

          <Typography margin size="label">Your message</Typography>
          <Input size="textArea" name="example2" />
          {errors.example2 && <span>This field is required</span>}

          <input style={{ backgroundColor: "white", height: "50px", width: "110px", color: "black" }} type="submit" />
        </StyledForm>
      </section>
    </>
  )
}

export default Contact;