import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";


export const Entry = styled.div`
min-width: 180px;
`;

export const Button = styled.button`
  font-family: Poppins;
  font-size: 18px;
  background-color: rgba(58, 232, 225, 1);
  border: 0px;
  border-radius: 10px;
  min-width: 63px;
  height: 44px;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

export const TableColumn = styled.div`
  margin-top: 10px;
`;

export const Icon = styled(MdModeEdit)`
  width: 25px;
  height: 25px;
  margin-top: 5px;
`;


