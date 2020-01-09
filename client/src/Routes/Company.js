import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 70vh;
  background-color: rgb(255,255,255);
`;

const Company = () => {
  return (
    <Section>
      <p>About company</p><br />
    </Section>
  )
}

export default Company;
