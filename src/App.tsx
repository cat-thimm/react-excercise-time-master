import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import 'firebase/firestore';
import { FirestoreProvider } from "@react-firebase/firestore";

import { useState, useEffect } from "react";

import Login from "./components/login/Login";
import MainPage from "./components/main-page/MainPage";

function App() {
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (logout) {
      setTimeout(() => {
        setLogout(false);
      }, 100);
    }
  });

  const firebaseConfig = {
    apiKey: "AIzaSyDWoLie3_CyRCi_-GJcVvdvfjTThrggn-Y",
    authDomain: "timemaster-3f8fb.firebaseapp.com",
    projectId: "timemaster-3f8fb",
    databaseURL: "https://timemaster-3f8fb-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "timemaster-3f8fb.appspot.com",
    messagingSenderId: "105237131268",
    appId: "1:105237131268:web:08b0d04849dbc03fb00551",
    measurementId: "G-GWZ9PC13CT",
  };

  return (
    <FirestoreProvider {...firebaseConfig} firebase={firebase}>
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        {logout && <Redirect to="/" />}
        <Route
          path="/:userName/:tab"
          component={() => <MainPage logout={logout} setLogout={setLogout} />}
        />
      </Router>
    </FirestoreProvider>
  );
}

export default App;
