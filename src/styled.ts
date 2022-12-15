import styled from 'styled-components'
import {  MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Input = styled.input`
    font-family: 'Poppins';
    font-size: 18px;
    width: 350px;
    height: 42px;
    border-color:rgba(152, 152, 152, 0.5);
    border-width: thin;
`

export const Header = styled.div`
  font-size: 48px;
`;

export const HeaderField = styled.div`
  margin: 20px;
  flex-grow: 100;
  max-height: 100px;
  background-color: white;
  padding: 10px;
`;

export const Button = styled.button`
  font-family: Poppins;
  font-size: 18px;
  background-color: rgba(58, 232, 225, 1);
  border: 0px;
  border-radius: 10px;
  color: white;
  margin-top: 35px;
  cursor: pointer;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
` 
export const ArrowRight = styled(MdKeyboardArrowRight)`
  width: 20px;
  height: 20px;
  margin-right: 80px;
  cursor: pointer;
` 

export const Body = styled.div`
  margin: 20px;
  margin-top: 0px;
  flex-grow: 100;
  background-color: white;
  padding: 20px;
`;

export const Headline = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const TableRow = styled(Row)`
  justify-content: space-between;
`;

export const Entry = styled.div`
    min-width: 120px;
    margin: 20px;
`

export const TableColumnHeader = styled.div`
  color: rgba(74, 74, 74, 1);
  min-width: 50px; 
`;

export const Select = styled.select`
font-family: Poppins;
  font-size: 18px;
  border: 0px;
  cursor: pointer;
`
