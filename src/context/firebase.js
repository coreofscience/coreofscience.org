/**
 * Firebase context provider.
 */

import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [state, setState] = useState({
    firebase: null,
    database: null,
    ready: false
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    fetch("/__/firebase/init.json")
      .then(async response => {
        firebase.initializeApp(await response.json());
      })
      .then(() =>
        setState({
          firebase: firebase,
          database: firebase.firestore(),
          ready: true
        })
      );
  }, []);
  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider };
export default FirebaseContext;
