import React from "react";
import Typography from "../components/atoms/typography";
import Nav from "../components/organisms/nav";
import theme from "../theme";
import { useForm } from 'react-hook-form'


function Contact() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  console.log(watch('example')) // watch input value by passing the name of it
  return (
    <>
      <Nav />
      <section style={{ padding: "50px 150px", minHeight: "100vh", width: "100%", backgroundColor: theme.colors.main.primary }}>
        <Typography size="h1">Want to get in touch? ping me</Typography>



        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input style={{ border: "2px solid white", backgroundColor: "unset", height: "40px", width: "290px" }} name="example" defaultValue="test" ref={register} />

          {/* include validation with required or other standard HTML validation rules */}
          <input style={{ border: "2px solid white", backgroundColor: "unset", height: "40px", width: "290px" }} name="exampleRequired" ref={register({ required: true })} />
          <input style={{ border: "2px solid white", backgroundColor: "unset", height: "40px", width: "290px" }} name="exampleRequired" ref={register({ required: true })} />
          <input style={{ border: "2px solid white", backgroundColor: "unset", height: "40px", width: "290px" }} name="exampleRequired" ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input style={{ backgroundColor: "white", height: "50px", width: "110px", color: "black" }} type="submit" />
        </form>
      </section>
    </>
  )
}

export default Contact;