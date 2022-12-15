import { observer } from "mobx-react-lite";
import {
  Modal,
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
  FormEntry,
} from "./Modal-Styled";
import { Row } from "../../../styled";

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  coworkerName: string;
  hours: any;
}

const EditWorkerModal = ({
  show,
  setShow,
  coworkerName,
  hours,
}: ModalProps) => {
  if (!show) return null;
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <Row>
            <ModalTitle>Mitarbeiter bearbeiten</ModalTitle>
            <ModalSubTitle>{coworkerName}</ModalSubTitle>
          </Row>
        </ModalHeader>
        <ModalBody>
          <FormEntry>
            <label>Name </label>
            <ModalHourInput value={coworkerName} />
          </FormEntry>
          {hours.map((info: any) => {
            return (
              <FormEntry>
                <label>KW {info.week} </label>
                <ModalHourInput value={info.hours} type="number" />
                <Select value={info.vacation ? 'vacation' : 'novacation'}>
                    <option value="vacation">Urlaub</option>
                    <option value="novacation">Kein Urlaub</option>
                </Select>
              </FormEntry>
            );
          })}
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={() => setShow(false)}>Speichern</SaveButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default observer(EditWorkerModal);
