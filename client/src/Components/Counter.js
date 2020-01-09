import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 3em;
  padding: 0 22% 4em 22%;
  background-color: white;
  & .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  & .card:nth-child(odd), .card:nth-child(even) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & div i {
    padding: 0.5em 1em 0.5em 0;
    font-size: 4em;
    color: rgb(76, 137, 48);
  }
  & div p:first-child {
    font-size: 3em;
    font-weight: 200;
  }
  & div p:last-child {
    font-weight: 600;
  }
`;

export default class Counter extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      clients: 5,
      employees: 8,
      users: 10,
      current: 0
    };
  }

  next = () => {
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) ) + min;
    }
    let pace = 2000;
    let updateClients = null;
    let updateEmployees = null;
    let updateUsers = null;
    do {
      updateClients = randomNumber (1, 5) + this.state.clients;
      updateEmployees = randomNumber (1, 5) + this.state.employees;
      updateUsers = randomNumber (1, 5) + this.state.users;
    } while (updateClients === this.state.current);

    this.setState({
      clients: updateClients,
      employees: updateEmployees,
      users: updateUsers
    });

    if (updateClients !== 0) {
      let timer = setTimeout(this.next, pace);
    }
  }

  componentDidMount = () => {
    this.next();
  }

  render() {
    return (
      <Section>
        <div className = 'card'>
          <div>
            <i className = 'fas fa-briefcase'></i>
          </div>
          <div>
            <p>
              {this.state.clients}
            </p>
            <p>
              Clients
            </p>
          </div>
        </div>
        <div className = 'card'>
          <div>
            <i className = 'far fa-smile'></i>
          </div>
          <div>
            <p>
              {this.state.employees}
            </p>
            <p>
              Employees
            </p>
          </div>
        </div>

        <div className = 'card'>
          <div>
            <i className = 'fas fa-globe-americas'></i>
          </div>
          <div>
            <p>
              {this.state.users}
            </p>
            <p>
              Daily users
            </p>
          </div>
        </div>
      </Section>
    )
  }
}
