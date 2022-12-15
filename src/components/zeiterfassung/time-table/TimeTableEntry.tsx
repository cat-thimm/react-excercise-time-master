import { observer } from "mobx-react";
import { useState } from "react";

import { Row } from "../../../styled";
import { Entry as EntryType } from "../../store/store-types";
import { Button, Icon } from "../Zeiterfassung-Styled";
import Modal from "../modal/Modal";
import { customerList } from "../../store/store";
import {
  Entry,
  EntryRow,
  HourEntry,
  FirstEntry,
  EntrySelect,
  CommentEntry
} from "./TimeTableEntryStyled";

interface TimeTableEntryProps {
  data: EntryType;
  index: number;
}

const TimeTableEntry = ({ data, index }: TimeTableEntryProps) => {
  const isEven = (value: number) => value % 2 === 0;

  const [editId, setEditId] = useState<number>();
  const [edit, setEdit] = useState(false);

  const getHours = () => data.customers[parseInt(data.selectedCustomer)].hours;
  const getComments = () =>
    data.customers[parseInt(data.selectedCustomer)].comments;

  return (
    <EntryRow isEven={isEven(index)}>
      {editId !== undefined && (
        <Modal id={editId} show={edit} setShow={setEdit}></Modal>
      )}
      <Row>
        <FirstEntry>{data.day}</FirstEntry>
        <Entry>{data.date.toLocaleDateString()}</Entry>
        <HourEntry isEven={isEven(index)}>
          {getHours() === "" ? "Noch nicht erfasst" : getHours() + "h"}
        </HourEntry>
        <Entry>
          <EntrySelect
            name="Kunden"
            value={data.selectedCustomer}
            isEven={isEven(index)}
            onChange={(e) => (data.selectedCustomer = e.target.value)}
          >
            {customerList.map((customer, index) => {
              return (
                <option value={index.toString()} key={index}>
                  {customer}
                </option>
              );
            })}
          </EntrySelect>
        </Entry>
        <CommentEntry isEven={getComments() === "" && !isEven(index)}>
          {getComments() === ""
            ? "Noch nicht erfasst"
            : getComments().length > 50
            ? getComments().substring(0, 49) + "..."
            : getComments()}
        </CommentEntry>
      </Row>
      <Button
        onClick={() => {
          setEditId(data.id);
          setEdit(true);
        }}
      >
        <Icon />
      </Button>
    </EntryRow>
  );
};

export default observer(TimeTableEntry);
