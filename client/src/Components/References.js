import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 10% 4em 10%;
  background-color: rgb(255,255,255);
  & h1 {
    text-align: center;
    padding: 1em 0;
    font-size: 2em;
  }
  & .inner-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(263px, auto));
    gap: 1em;
  }
  & .card-inGrid {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px rgb(235, 235, 235) solid;
    border-radius: 4px;
    background-color: white;
    border-radius: 5px;
  }
  & .card-inGrid div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14em;
  }
  & .company-logo {
    padding: 0 2em;
    border: 1px rgb(235, 235, 235) solid;
    border-bottom: none;
  }
  & .company-info {
    display: flex;
    flex-direction: column;
    padding: 0 2em;
    border: 1px rgb(235, 235, 235) solid;
    border-bottom: none;
  }
  & .title {
    margin-bottom: 1em;
    font-size: 1.4em;
    font-weight: 600;
  }
  & .description {
    font-weight: 200;
    text-align: center;
  }
`;

const References = () => {
  const referencesData = require('../Data/references.json');
  // for (let i = 0; i < referencesData.length; i++) {
  //   console.log(referencesData[i])
  // }
  // console.log( referencesData)
  const referencesList = referencesData.map( (grid) => {
    return(
        <div className = 'card-inGrid' key = { grid.id }>
        <a href = { grid.url } target = '_blank' rel="noopener noreferrer">
          <div className = 'company-logo'>
            <img src = {grid.img} alt = { grid.title } />
          </div>
          <div className = 'company-info'>
            <p className = 'title'>{ grid.title }</p>
            <p className = 'description'>{ grid.description }</p>
          </div>
          </a>
        </div>
    );
  })
  return(
    <Section>
      <h1>References</h1>
      <div className = 'inner-grid'>
        {referencesList}
      </div>
    </Section>
  )
}

export default References;
