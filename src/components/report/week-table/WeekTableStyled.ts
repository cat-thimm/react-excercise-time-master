import styled from 'styled-components'
import { TableRow } from "../../../styled";

export const Amount = styled.div`
  font-family: Poppins;
  font-size: 18px;
  background-color: rgba(58, 232, 225, 1);
  border: 0px;
  border-radius: 10px;
  color: white;
  width: 63px;
  height: 44px;
  text-align: center;
  vertical-align: middle;
  line-height: 44px;
  margin-right: 20px;
`;

export const WeekTableRow = styled(TableRow) <{ isEven: boolean }>`
background-color: ${(props) => props.isEven ? 'rgba(195, 195, 187, 0.47)' : ''}
`