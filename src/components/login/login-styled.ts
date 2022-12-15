import styled from "styled-components";
import { Field } from "formik";
import { Column, Header, Button } from "../../styled";

export const LoginField = styled.div`
  margin-top: 20px;
  background-color: white;
  width: 470px;
  min-height: 344px;
  border-radius: 5px;
`;

export const LoginColumn = styled(Column)`
    align-items: center;
`

export const LoginHeadline = styled(Header)`
    margin-top: 150px;
`

export const LoginHeader = styled.div`
  margin-top: 20px;
  font-size: 42px;
`;

export const LoginInput = styled(Field)`
  font-family: "Poppins";
  font-size: 18px;
  width: 350px;
  height: 42px;
  border-color: rgba(152, 152, 152, 0.5);
  border-width: thin;
  margin-top: 25px;
`;

export const LoginButton = styled(Button)`
  width: 168px;
  height: 43px;
  margin-bottom: 20px;
`;

export const Error = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: red;
`;
