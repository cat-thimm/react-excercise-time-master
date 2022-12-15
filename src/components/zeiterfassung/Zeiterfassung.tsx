import moment from "moment";
import styled from "styled-components";

import TimeTable from "./time-table/TimeTable";

const Body = styled.div`
  margin: 20px;
  margin-top: 0px;
  flex-grow: 100;
  background-color: white;
  padding: 20px;
`;

const Headline = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subheadline = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: rgba(74, 74, 74, 1);
`;

const Zeiterfassung = () => {
  return (
    <Body>
      <Headline>Zeiterfassung</Headline>
      <Subheadline>Im Monat {moment().format('MMMM')}</Subheadline>
      <TimeTable />
    </Body>
  );
};

export default Zeiterfassung;