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
        setMessage("Thank you for keeping in touch!");
      })
      .catch(() => setError("Invalid email"));
  };
  const resetMessage = () => {
    setMessage("");
  };

  return (
    <div>
      {message ? (
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#EEF1FA",
            borderRadius: "10px",
            border: "2px solid #565678",
            padding: "10px"
          }}
        >
          <span
            style={{
              margin: "0px",
              color: "#11103e",
              paddingRight: "20px"
            }}
          >
            {message}
          </span>
          <a
            style={{
              fontWeight: "bold",
              color: "#11103e",
              cursor: "pointer"
            }}
            onClick={resetMessage}
            onMouseEnter={event => {
              event.target.style.color = "crimson";
            }}
            onMouseLeave={event => {
              event.target.style.color = "#11103e";
            }}
          >
            &times;
          </a>
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
