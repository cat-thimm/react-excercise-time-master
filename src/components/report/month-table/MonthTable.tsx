import styled from "styled-components";

import { Row } from "../../../styled";
import store from "../../store/store";
import { Customer } from '../../store/store-types'

import TableEntry from "./MonthTableEntry";

const Month = styled(Row)`
  flex-wrap: wrap;
`;

interface Props {
  customer: Customer | string;
}

const MonthTable = (props: Props) => {
  return (
    <>
      <Month>
        {props.customer === ""
          ? store.dailyWorkingHoursMonth.map((data, index) => {
              return (
                <TableEntry
                  key={index}
                  data={{
                    index: index,
                    amount: data.amount,
                    date: data.date,
                  }}
                />
              );
            })
          : store
              .dailyWorkingHoursByCustomerMonth(props.customer)
              .map((data, index) => {
                return (
                  <TableEntry
                    key={index}
                    data={{
                      index: index,
                      amount: data.amount,
                      date: data.date,
                    }}
                  />
                );
              })}
      </Month>
    </>
  );
};

export default MonthTable;
