import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);
  const prop = { showModal, setShowModal };
  return (
    <>
      <button
        className="btn signup-btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faUser} />
        &nbsp; Create Account
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
