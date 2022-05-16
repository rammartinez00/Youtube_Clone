import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const prop = { showModal, setShowModal };
  return (
    <>
      <button className="btn" onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faUser} />
        &nbsp; Sign in
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm prop={prop} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
