import styled from 'styled-components';

let Input = styled.input`
    border: 5px solid black;
    background-color: #FFC240;
    color: white;
    font-family: 'Gotham';
    font-size: 40px;
    font-weight: bolder;
    padding: 15px; 
    outline: none;
    ::placeholder {
    color: white;
  }
`;

export default Input;