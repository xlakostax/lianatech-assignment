import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  & input {
    height: 2em;
    border-radius: 4px 4px;
    font-size: 1em;
    font-weight: 400;
    outline: none;
  }
  & input:first-child {
    width: 10em;
    border: 1px rgb(235, 235, 235) solid;
    margin-right: 0.5em;
    padding: 0 20px;
  }
  & input:last-child {
    width: 5em;
    border: 1px rgb(76, 137, 48) solid;
    background-color: rgb(76, 137, 48);
    color: #FFFFFF;
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
