import styled from "styled-components";
import { TableRow, Select } from "../../../styled";
export const Entry = styled.div`
min-width: 180px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const EntryRow = styled(TableRow)<{isEven: boolean}>`
  max-height: 65px;
  background-color: ${((props) => props.isEven ? 'rgba(195, 195, 187, 0.47)': '')};
`;

export const HourEntry = styled(Entry)<{isEven: boolean}>`
color: ${(props)=>props.isEven ? 'rgba(74, 74, 74, 1)' :'rgba(195, 195, 187, 1)'};
`

export const CommentEntry = styled(Entry)<{isEven: boolean}>`
color: ${(props)=>props.isEven ? 'rgba(195, 195, 187, 1)' :'rgba(74, 74, 74, 1)'};
`

export const FirstEntry = styled.div`
margin-left: 20px;
min-width: 160px;
`
export const EntrySelect = styled(Select)<{isEven: boolean}>`
background-color: ${((props) => props.isEven ? 'rgba(227, 227, 218, 0.47)': '')};
`