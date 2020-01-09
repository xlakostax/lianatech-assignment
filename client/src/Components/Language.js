import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
   width: 10em;
   height: 2em;
   border: 1px white solid;
   border-radius: 4px 4px;
   font-size: 16px;
   cursor: pointer;
   outline: none;
   padding: 0 10px;
`;

const Language = () => {
    return (
      <Select>
        <option>In English</option>
        <option>Suomeksi</option>
      </Select>
    )
}

export default Language;
