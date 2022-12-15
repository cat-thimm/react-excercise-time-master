import styled from "styled-components";
import {  Row, Button, TableColumnHeader, Entry, Select } from "../../styled";
import { RiUserSettingsLine } from "react-icons/ri";

export const Mitarbeiter = styled(TableColumnHeader)`
    min-width: 205px;
`

export const Header = styled(Entry)`
    min-width: 160px;
`

export const TableRow = styled(Row)<{isEven: boolean}>`
  justify-content: space-between;
  background-color: ${(props) => props.isEven ? 'rgba(195, 195, 187, 0.47)' : ''}
`;

export const EditButton = styled(Button)`
  width: 63px;
  height: 43px;
  margin-top: 0;
  margin-right: 20px;
`;

export const Icon = styled(RiUserSettingsLine)`
  width: 25px;
  height: 25px;
  margin-top: 5px;
`;

export const AdminEntry = styled.div`
  min-width: 160px;
  margin: 20px;
`;

export const NoVacation = styled(Entry)`
  color: rgba(74, 74, 74, 1);
`;

export const AdminSelect = styled(Select)<{isEven: boolean}>`
    background-color: ${(props) => props.isEven ? 'rgba(227, 227, 218, 0.47)' : ''}
`