import React from 'react';
import styled from 'styled-components';
const TextField = styled.input`
    box-sizing: border-box;
    margin: 20px 0;
    color: #21262d;
    line-height: 25px;
    font-size: 1.2em;
    border-radius: 5px;
    width: 100%;
`;
export const NameField = (props) => {
    return(
        <TextField type='text'/>
    );
}