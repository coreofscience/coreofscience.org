import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import crypto from "crypto";

import FirebaseContext from "../context/firebase";

const EmailForm = ({ className }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [message, setMessage] = useState("");
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
      .then(() => {
        setEmail("");
        setMessage("Thanks for registering");
      })
      .catch(() => setError("Invalid email"));
  };
  const resetMessage = () => {
    setMessage("");
  };

  return (
    <div>
      {message ? (
        <div>
          <h5
            style={{
              color: "rgb(255, 55, 94)"
            }}
          >
            {message}
          </h5>
          <button
            onClick={resetMessage}
            className="button button-primary button-block button-shadow"
          >
            Register other email
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

EmailForm.propTypes = {
  className: PropTypes.string.isRequired
};

export default EmailForm;
