import { useState } from "react";

import { Row } from "../../styled";
import { Hours } from "../store/store-types";
import EditWorkerModal from "../zeiterfassung/modal/EditWorkerModal";
import {TableRow, EditButton, Icon, AdminEntry as Entry, NoVacation, AdminSelect} from './AdminStyled'


interface AdminEntryProps {
  index: number;
  name: string;
  hours: Hours[];
}



const AdminEntry = ({ index, name, hours }: AdminEntryProps) => {
  const [selectedKw, setSelectedKw] = useState("32");
  const [showModal, setShowModal] = useState(false);

  const getSelectedEntry = () => {
    const entry = hours.find((entry) => entry?.week === selectedKw);
    if (entry) {
      return entry;
    }
  };

  return (
    <TableRow isEven={index % 2 === 0}>
      {showModal && <EditWorkerModal show={showModal} setShow={setShowModal} coworkerName={name} hours={hours} />}
      <Row>
        <Entry>{name}</Entry>
        <Entry>
          <AdminSelect
            isEven={index % 2 === 0}
            value={selectedKw}
            onChange={(e) => setSelectedKw(e.target.value)}
          >
            <option value={"32"}>32</option>
            <option value={"33"}>33</option>
            <option value={"34"}>34</option>
            <option value={"35"}>35</option>
          </AdminSelect>
        </Entry>
        <Entry>{getSelectedEntry()?.hours || "Noch nicht erfasst"}</Entry>
        {getSelectedEntry()?.vacation ? (
          <Entry>Urlaub</Entry>
        ) : (
          <NoVacation>Kein Urlaub</NoVacation> || <Entry>''</Entry>
        )}
      </Row>
      <EditButton onClick={(() => setShowModal(true) )}>
        <Icon />
      </EditButton>
    </TableRow>
  );
};

export default AdminEntry;
