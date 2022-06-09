import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditVideo from "./editVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function EditVideoModal() {
  const [showModal, setShowModal] = useState(false);
  const prop = { showModal, setShowModal };
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faPen} />
        &nbsp;Edit Video Details
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditVideo prop={prop} />
        </Modal>
      )}
    </>
  );
}

export default EditVideoModal;
