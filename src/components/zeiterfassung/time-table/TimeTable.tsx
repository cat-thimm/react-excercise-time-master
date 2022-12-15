import { observer } from "mobx-react";
import moment from "moment";
import { useState } from "react";

import { Row, ArrowLeft, ArrowRight, TableColumnHeader } from "../../../styled";
import store from "../../store/store";
import { Entry, TableColumn } from "../Zeiterfassung-Styled";
import TimeTableEntry from "./TimeTableEntry";
import { changeWeekToPast, changeWeekToFuture } from "./TimeTable.helper";

const TimeTable = () => {
  const [startOfWeek, setStartOfWeek] = useState(
    moment().startOf("week").toDate()
  );
  const [endOfWeek, setEndOfWeek] = useState(moment().endOf("week").toDate());

  return (
    <>
      <Row>
        <TableColumnHeader>KW {moment(startOfWeek).week()}</TableColumnHeader>
        <ArrowLeft
          onClick={() =>
            changeWeekToPast(
              startOfWeek,
              setStartOfWeek,
              endOfWeek,
              setEndOfWeek
            )
          }
        />
        <ArrowRight
          onClick={() =>
            changeWeekToFuture(
              startOfWeek,
              setStartOfWeek,
              endOfWeek,
              setEndOfWeek
            )
          }
        />
        <Entry>Datum</Entry>
        <Entry>Stundenzahl</Entry>
        <Entry>Kunde</Entry>
        <Entry>Kommentare</Entry>
      </Row>
      <TableColumn>
        {store.workingInformation
          .filter(
            (entry) => entry.date >= startOfWeek && entry.date <= endOfWeek
          )
          .map((filteredEntry, index) => {
            return (
              <TimeTableEntry
                data={filteredEntry}
                index={index}
                key={filteredEntry.id}
              />
            );
          })}
      </TableColumn>
    </>
  );
};

export default observer(TimeTable);
