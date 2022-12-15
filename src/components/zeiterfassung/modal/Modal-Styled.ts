import styled from "styled-components";
import { Button } from "../../../styled";

export const SaveButton = styled(Button)`
  width: 135px;
  height: 44px;
  margin: 10px;
`;

export const ModalHourInput = styled.input`
  height: 25px;
  margin-left: 20px;
  font-family: "Poppins";
  font-size: 14px;
  width: 250px;
  border-color: rgba(152, 152, 152, 0.5);
  border-width: thin;
`;

export const Error = styled.div`
  margin-left: 120px;
  margin-top: 10px;
  font-size: 14px;
  color: red;
`;

export const Select = styled.select`
  font-family: "Poppins";
  font-size: 14px;
  margin-left: 57px;
  border-color: rgba(152, 152, 152, 0.5);
  border-width: thin;
  width: 257px;
`;

export const Textarea = styled.textarea`
  font-family: "Poppins";
  font-size: 14px;
  border-color: rgba(152, 152, 152, 0.5);
  border-width: thin;
  max-width: 250px;
  max-height: 250px;
  margin-left: 20px;
`;

export const FormEntry = styled.div`
  margin: 10px;
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  width: 750px;
  background-color: rgba(229, 229, 229, 1);
`

export const ModalHeader = styled.div`
  background-color: white;
  margin: 20px;
`

export const ModalFooter = styled.div`
  margin: 10px;
`

export const ModalTitle = styled.div`
  margin: 10px;
`

export const ModalSubTitle = styled.div`
  font-size: 18px;
  padding: 20px;
  padding-left: 0px;
`

export const ModalBody = styled.div`
  padding: 10px;
  margin: 20px;
  background-color: white;
`