import { observer } from "mobx-react";

import { Row, Entry } from "../../../styled";
import {Amount, WeekTableRow} from './WeekTableStyled'



interface WeekTableEntryProps {
    index: number;
    day: string;
    date: Date;
    hours: number | string;
}

const WeekTableEntry = ({index, day, date, hours} : WeekTableEntryProps) => {
  return (
    <WeekTableRow isEven={index%2 === 0}>
      <Row>
        <Entry>{day}</Entry>
        <Entry>{date.toLocaleDateString()}</Entry>
      </Row>
      <Amount>{hours}h</Amount>
    </WeekTableRow>
  );
};

export default observer(WeekTableEntry);
