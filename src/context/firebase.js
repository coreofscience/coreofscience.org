/**
 * Firebase context provider.
 */

import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [state, setState] = useState({
    app: null,
    firestore: null,
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
          app: firebase,
          firestore: firebase.firestore(),
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
