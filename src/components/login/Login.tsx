import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import {
  LoginField,
  LoginHeader,
  LoginInput,
  LoginButton,
  LoginColumn,
  LoginHeadline,
  Error,
} from "./login-styled";
import {coworkerList, adminList, moderatorList} from '../store/store'

interface FormValues {
  userName: string;
  password: string;
}

const getUserName = () => {
  const userName = localStorage.getItem("userName");
  return userName ? userName : "";
};

const Login = () => {
  const initialValues: FormValues = { userName: getUserName(), password: "" };
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  return (
    <LoginColumn>
      <LoginHeadline>
        Time<strong>Master</strong>
      </LoginHeadline>
      {loggedIn && (
        <Redirect to={"/" + initialValues.userName + "/zeiterfassung"} />
      )}
      <LoginField>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            const worker = coworkerList.find((worker) => worker.name === values.userName);
            const admin = adminList.find((admin) => admin.name === values.userName);
            const mod = moderatorList.find((mod) => mod.name === values.userName);

            if(!worker && !admin && !mod) {
              console.log('Psssst: A valid user is cthimm, but don`t tell!')
              setLoginFailed(true);
              return;
            }

            localStorage.setItem("userName", values.userName);
            localStorage.setItem("loggedIn", "true");
            setLoggedIn(true);
            actions.setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            userName: Yup.string().required("Enter your username"),
            password: Yup.string().required("Enter your password.")
          })}
        >
          {({ errors }) => (
            <Form>
              <LoginColumn>
                <LoginHeader>Login</LoginHeader>
                <LoginColumn>
                  <LoginInput
                    type="text"
                    placeholder="Username"
                    id="userName"
                    name="userName"
                  />
                  {errors.userName ? <Error>{errors.userName}</Error> : null}
                </LoginColumn>
                <LoginInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                />
                {errors.password ? <Error>{errors.password}</Error> : null}
                {loginFailed && <Error>No valid user</Error>}
                <LoginButton type="submit">Login</LoginButton>
              </LoginColumn>
            </Form>
          )}
        </Formik>
      </LoginField>
    </LoginColumn>
  );
};

export default Login;
