//TODO : use styled components rather than inline crappy style.
import React from "react";
import styled from "styled-components";
import Typography from "../components/atoms/typography";
import Theme from "../Theme";

const members = [
  {
    name: "Quentin Lenglin",
    role: "UX/UI",
  },
  {
    name: "Valentine Leroy",
    role: "UX/UI",
  },
  {
    name: "Marion Ott",
    role: "Developer",
  },
  {
    name: "Anthony Reynaud",
    role: "Developer",
  },
  {
    name: "Florian Sahbi",
    role: "Developer",
  },
  {
    name: "Hector Travaillé",
    role: "UX/UI",
  },
  {
    name: "Mahel Zeroual",
    role: "Developer",
  },
];

function Konami({ onClick }) {
  return (
    <>
      <section
        style={{
          backgroundColor: Theme.colors.main.primary,
          minHeight: "100vh",
          padding: "50px 150px",
        }}
      >
        {members.map((member, i) => (
          <Typography margin key={i} size="bodyLarge">
            {member.name} - {member.role}
          </Typography>
        ))}

        <button
          onClick={onClick}
          style={{
            color: Theme.colors.main.secondary,
            textDecoration: "none",
            background: "none",
          }}
        >
          FERMER
        </button>
      </section>
    </>
  );
}

export default Konami;
