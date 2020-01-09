import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(263px, auto));
  gap: 2vw;
  padding: 4em 10%;
  background-color: white;
  & .card-inGrid {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 2em;
    height: 10em;
  }
  & .card a {
    position: relative;
    font-size: 2em;
    font-weight: 600;
    color: rgb(255, 255, 255);
  }
`;

const Grid = () => {
  const gridData = require('../Data/grid.json');
  // for (let i = 0; i < gridData.length; i++) {
  //   console.log(gridData[i])
  // }
  // console.log( gridData)
  const gridList = gridData.map ( (grid) => {
    return (
      <div className = 'card card-inGrid' style = {{ backgroundImage: grid.img , backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} key = { grid.id }>
          <a className = 'card-title' href = { grid.url }>{ grid.title }</a>
      </div>
    );
  });
  return (
    <Section>
      {gridList}
    </Section>
  )
}

export default Grid;
