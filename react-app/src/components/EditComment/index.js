import React, { useState } from "react";
import { Modal } from "../../context/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import EditCommentForm from "./editComment";

function EditCommentModal({ comments }) {
  const [showModal, setShowModal] = useState(false);
  const prop = { showModal, setShowModal };
  return (
    <>
      <button
        className="btn video-edit-button"
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon icon={faPen} />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm prop={prop} comments={comments} />
        </Modal>
      )}
    </>
  );
}

export default EditCommentModal;
