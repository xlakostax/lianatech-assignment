import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 9fr 1fr;
    gap: 1em;
    width: 100%;
    padding-bottom: 2em;
  }
  & input {
    height: 2em;
    border-radius: 4px 4px;
    font-size: 1em;
    font-weight: 400;
    outline: none;
  }
  & input:first-child {
    width: 10em;
    margin-right: 0.5em;
    padding: 0 1em;
    border: 1px rgb(235, 235, 235) solid;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & input:last-child {
    width: 5em;
    border: 1px rgb(76, 137, 48) solid;
    background-color: rgb(76, 137, 48);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

const Search = () => {
  return (
    <Form> {/* Do not forget action = 'handler' */}
      <input type = 'search' name = 'q' placeholder = 'Search' />
      <input type = 'submit' value = 'Search'/>
    </Form>
  )
}

export default Search;
