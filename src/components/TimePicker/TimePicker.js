import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 100%;
    line-height: 33px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #15bfea;
    color: #15bfea;
    margin-top: 20px;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    transition: transform 0.1s;

    &:hover {
        background: #15bfea;
        color: #21262d;
    }
`;

export default class TimePicker extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return(
            <ButtonStyled>{this.props.buttonValue}</ButtonStyled>
        );
    }
}