/**
 * Firebase context provider.
 */

import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [state, setState] = useState({
    app: null,
    firestore: null,
    ready: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (process.env.NODE_ENV === "development") {
      const firebaseConfig = {
        apiKey: process.env.GATSBY_FIREBASE_API_KEY,
        authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
        projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
        storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.GATSBY_FIREBASE_APP_ID,
        measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      setState({
        app: firebase,
        firestore: firebase.firestore(),
        ready: true,
      });
    } else {
      fetch("/__/firebase/init.json")
        .then(async (response) => {
          firebase.initializeApp(await response.json());
          firebase.analytics();
        })
        .then(() =>
          setState({
            app: firebase,
            firestore: firebase.firestore(),
            ready: true,
          })
        );
    }
  }, []);

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider };
export default FirebaseContext;
