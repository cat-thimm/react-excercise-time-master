import { Headline, Body, Row } from "../../styled";
import AdminEntry from "./AdminEntry";

import {Mitarbeiter, Header} from './AdminStyled'
import { coworkerList, adminList } from "../store/store";


const Admin = () => {
    const allWorkers = [...coworkerList, ...adminList]

  return (
    <Body>
      <Headline>Admin</Headline>
      <Row>
          <Mitarbeiter>Mitarbeiter</Mitarbeiter>
          <Header>KW</Header>
          <Header>Stundenzahl</Header>
          <Header>Urlaub</Header>
      </Row>
      {allWorkers.map((worker,index) => {
        return <AdminEntry key={worker.id} index={index} name={worker.name} hours={worker.hours}/>;
      })}
    </Body>
  );
};

export default Admin;
