import { observer } from "mobx-react-lite";
import moment from "moment";
import styled from "styled-components";

import WeekTableEntry from "./WeekTableEntry";
import { ArrowLeft, ArrowRight, Row, TableColumnHeader } from "../../../styled";
import store from "../../store/store";

import {
  changeWeekToPast,
  changeWeekToFuture,
} from "../../zeiterfassung/time-table/TimeTable.helper";

const TableRow = styled(Row)`
    margin-bottom: 10px;s
`

interface WeekTableProps {
  startOfWeek: Date,
  endOfWeek: Date,
  setStartOfWeek: (startOfWeek: Date) => void;
  setEndOfWeek: (endOfWeek: Date) => void;
  customer: string
}

const WeekTable = ({ customer, startOfWeek, setStartOfWeek, endOfWeek, setEndOfWeek }: WeekTableProps) => {
    return (
    <>
      <TableRow>
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
      </TableRow>
      {customer === ""
        ? store.dailyWorkingHoursWeek
            .filter(
              (entry) => entry.date >= startOfWeek && entry.date <= endOfWeek
            )
            .map((filteredEntry, index) => {
              return (
                <WeekTableEntry
                  key={index}
                  index={index}
                  day={filteredEntry.day}
                  date={filteredEntry.date}
                  hours={filteredEntry.amount}
                />
              );
            })
        : store
            .dailyWorkingHoursByCustomerWeek(customer)
            .filter(
              (entry) => entry.date >= startOfWeek && entry.date <= endOfWeek
            )
            .map((filteredEntry, index) => {
              return (
                <WeekTableEntry
                  key={index}
                  index={index}
                  day={filteredEntry.day}
                  date={filteredEntry.date}
                  hours={filteredEntry.amount}
                />
              );
            })}
    </>
  );
};

export default observer(WeekTable);
