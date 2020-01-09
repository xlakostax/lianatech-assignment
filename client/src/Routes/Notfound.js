import React from "react";
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 60vh; //поиграть
  background-color: rgb(255,255,255);
  & span {
    color: rgb(76, 137, 48);
  }
`;

const Notfound = () => {
  return (
    <Section>
      <p>¯\_(ツ)_/¯</p><br />
      <p>Page not found</p><br />
      <a href="/">Go back <span>home</span></a>
    </Section>
  )
}

export default Notfound
