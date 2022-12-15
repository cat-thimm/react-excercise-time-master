import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";

import store from "../../store/store";
import { customerList } from "../../store/store";
import { Row } from "../../../styled";
import {
  Modal as ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalSubTitle,
  ModalBody,
  SaveButton,
  ModalHourInput,
  Error,
  Select,
  Textarea,
  FormEntry,
} from "./Modal-Styled";
import {
  getHours,
  getCustomers,
  getComment,
  setHours,
  setCustomers,
  setComment,
} from "./Modal.helper";

interface ModalProps {
  id: number;
  show: boolean;
  setShow: (show: boolean) => void;
}

const Modal = ({ id, show, setShow }: ModalProps) => {
  const [tempHours, setTempHours] = useState(
    Number.isNaN(getHours(id)) ? "" : getHours(id)
  );
  const [tempComment, setTempComment] = useState(getComment(id));

  useEffect(() => {
    setTempHours(Number.isNaN(getHours(id)) ? "" : getHours(id));
    setTempComment(getComment(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCustomers(id)]);

  if (!show) return null;
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <Row>
            <ModalTitle> Zeiten erfassen </ModalTitle>
            <ModalSubTitle>
              {store.workingInformation[id].day}, der{" "}
              {store.workingInformation[id].date.toLocaleDateString()}
            </ModalSubTitle>
          </Row>
        </ModalHeader>
        <form
          onSubmit={(e) => {
            if (tempHours < 0 || tempHours > 24) {
              e.preventDefault();
              return;
            } else {
              setHours(id, tempHours);
              setComment(id, tempComment);
              setShow(false);
            }
          }}
        >
          <ModalBody>
            <FormEntry>
              <label htmlFor="hours">Stundenzahl</label>
              <ModalHourInput
                name="hours"
                type="number"
                placeholder="How long did you work that day?"
                min="0"
                max="23"
                step="0.25"
                value={tempHours}
                onChange={(e: any) => setTempHours(e.target.value)}
              />
              {tempHours < 0 || tempHours > 24 ? (
                <Error>Please type in a valid time</Error>
              ) : null}
            </FormEntry>
            <FormEntry>
              <label htmlFor="customer">Kunden</label>
              <Select
                name="customer"
                value={getCustomers(id)}
                onChange={(e) => {
                  setCustomers(id, e.target.value);
                  setTempHours(Number.isNaN(getHours(id)) ? 0 : getHours(id));
                  setTempComment(getComment(id));
                }}
              >
                {customerList.map((customer, index) => {
                  return (
                    <option value={index.toString()} key={index}>
                      {customer}
                    </option>
                  );
                })}
              </Select>
            </FormEntry>
            <FormEntry>
              <label htmlFor="comment">Kommentar </label>
              <Textarea
                name="comment"
                placeholder="What did you do today?"
                value={tempComment}
                onChange={(e: any) => setTempComment(e.target.value)}
              />
            </FormEntry>
          </ModalBody>
          <ModalFooter>
            <SaveButton type="submit">Speichern</SaveButton>
          </ModalFooter>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default observer(Modal);
