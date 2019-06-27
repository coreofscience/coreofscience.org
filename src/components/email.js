import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import crypto from "crypto";

import FirebaseContext from "../context/firebase";

const EmailForm = ({ className }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const firebase = useContext(FirebaseContext);
  const hash = crypto
    .createHash("md5")
    .update(email)
    .digest("hex")
    .slice(0, 20);
  const storeEmail = () => {
    if (!firebase.ready) return;
    firebase.firestore
      .doc(`emails/${hash}`)
      .set({ email, timestamp: new Date() })
      .then(() => setEmail(""))
      .catch(() => setError("Invalid email"));
  };
  return (
    <div className={className}>
      <div className="control control-expanded">
        <input
          className={`input ${error ? "error" : ""}`}
          type="email"
          name="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setError();
          }}
          placeholder="example@email.com"
        />
      </div>
      <div className="control">
        <button
          onClick={storeEmail}
          className="button button-primary button-block button-shadow"
        >
          Keep in touch
        </button>
      </div>
    </div>
  );
};

EmailForm.propTypes = {
  className: PropTypes.string.isRequired
};

export default EmailForm;
