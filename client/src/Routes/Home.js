import React from 'react';
import styled from 'styled-components';

import Counter from '../Components/Counter';
import Grid from '../Components/Grid';
import References from '../Components/References';
import RSS from '../Components/RSS';
import Subscription from '../Components/Subscription';

const Main = styled.main`
  width: 100%;
  & .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10em 0;
  }
  & .banner p {
    display: block;
    margin-bottom: 0.8em;
    padding: 0 1em;
    color: rgb(255, 255, 255);
    font-weight: 100;
    font-size: 4.6em;
    text-align: center;
    @media (max-width: 425px) {
      font-size: 2.2em;
    }
  }
  & .banner button {
    /* width: 7em; */
    padding: 0 1em;
    height: 2em;
    border: 1px rgb(76, 137, 48) solid;
    border-radius: 4px 4px;
    font-size: 1.2em;
    background-color: rgb(76, 137, 48);
    color: rgb(255, 255, 255);
    cursor: pointer;
    outline: none;
  }
`;

const Home = () => {
  return (
    <Main>
      <section className = 'banner'>
        <p>Software fueling digital marketing</p>
        <button>Learn More</button>
      </section>
      <Grid />
      <Counter />
      <RSS />
      <References />
      <Subscription />
    </Main>
  );
}
export default Home;
