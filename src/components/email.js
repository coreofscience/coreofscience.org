import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../context/firebase";

const EmailForm = ({ className }) => {
  const [email, setEmail] = useState("");
  const firebase = useContext(FirebaseContext);
  const storeEmail = () => {
    if (!firebase.ready) return;
    firebase.app
      .firestore()
      .collection("emails")
      .add({ email, timestamp: new Date() })
      .then(() => setEmail(""));
  };
  return (
    <div className={className}>
      <div className="control control-expanded">
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
