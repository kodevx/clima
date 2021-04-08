import styled from 'styled-components';

let DeleteBtn = styled.button`
    color: #298A91;
    font-size: 18px;
    font-weight: lighter;
    height: 36px;
    width: 36px;
    padding: 4px 12px;
    outline: none;
    border-radius: 40px;
    border: 2px solid #298A91;
    background-color: white;
    &:hover{
        color: #F88E46;
        border-color: #F88E46; 
        background-color: white;
        transition: 0.4s ease-out;
    }
`;

export default DeleteBtn;