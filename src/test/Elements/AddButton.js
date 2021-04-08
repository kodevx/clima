import styled from 'styled-components';

let Button = styled.button`
    /* border: 4px solid blue; */
    border-radius: 42px;
    outline: none;
    left: 15px;
    color: #FF6731;
    background-color: white;
    height: 87px;
    width: 87px;
    font-size: 54px;
    font-family: Gotham;
    border: 0px #FF6731 solid;
    font-size: 3em;
    background-color: white;
    font-weight: bold;
    height: 70px;
    width: 70px;
    &:hover{
        color: #28B5B5;
        transition: 0.5s ease-in-out;
    }
    &:active{
        background-color: #FAFAFA;
        color: #28B5B5;
        background-color: #FAFAFA;
        transition: 7ms ease-in-out;
    }
`;

export default Button;