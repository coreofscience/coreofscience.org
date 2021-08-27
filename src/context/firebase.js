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
    const firebaseConfig = {
      apiKey: process.env.GATSBY_FIREBASE_API_KEY,
      authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
      projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
      storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.GATSBY_FIREBASE_APP_ID,
      // NOTE: Let's see if this magically works as firebase claims
      // measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
    };
    try {
      setState({
        app: firebase.app(),
        firestore: firebase.firestore(),
        ready: true,
      });
    } catch {
      setState({
        app: firebase.initializeApp(firebaseConfig),
        firestore: firebase.firestore(),
        ready: true,
      });
    }
    firebase.analytics();
  }, []);

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider };
export default FirebaseContext;
