import React from "react";
import Typography from "../components/atoms/typography";
import Nav from "../components/organisms/nav";
import theme from "../theme";
import { useForm } from 'react-hook-form'
import Input from "../components/atoms/input";

import Styled from "styled-components";

const StyledForm = Styled.form`
  width: 600px;
`;


function Contact() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  console.log(watch('example')) // watch input value by passing the name of it
  return (
    <>
      <Nav />
      <section style={{ padding: "50px 150px", minHeight: "100vh", width: "100%", backgroundColor: theme.colors.main.primary }}>
        <Typography width={800} margin size="h1">Want to get in touch? ping me</Typography>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Typography width={200} margin size="label">What is your name ?</Typography>
          <Input size="halfWidth" name="example" ref={register} />

          <Typography width={200} margin size="label">Your email</Typography>
          <Input size="halfWidth" name="bla" ref={register} />

          <Typography margin size="label">Subject</Typography>
          <Input size="fullWidth" name="blou" ref={register({ required: true })} />

          <Typography margin size="label">Your message</Typography>
          <Input size="textArea" name="example2" ref={register({ required: true })} />
          {errors.example2 && <span>This field is required</span>}

          <input style={{ backgroundColor: "white", height: "50px", width: "110px", color: "black" }} type="submit" />
        </StyledForm>
      </section>
    </>
  )
}

export default Contact;