import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
   width: 10em;
   height: 2em;
   padding: 0 10px;
   border: 1px white solid;
   border-radius: 4px 4px;
   font-size: 1em;
   cursor: pointer;
   outline: none;
   @media (max-width: 367px) {
     width: 6em;
   }
   & .lang-choose-general {
     display: block;
     @media (max-width: 367px) {
       display: none;
     }
   }
   & .lang-choose-mobile {
     display: none;
     @media (max-width: 367px) {
       display: block;
     }
   }
`;

const Language = () => {
    return (
      <Select>
        <option className = 'lang-choose-general'>In English</option>
        <option className = 'lang-choose-general'>Suomeksi</option>
        <option className = 'lang-choose-mobile'>EN</option>
        <option className = 'lang-choose-mobile'>FI</option>
      </Select>
    )
}

export default Language;
