import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
import { updateComment } from "../../store/comments";
import "./index.css";

const EditCommentForm = ({ comments, prop }) => {
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.session.user);

  const [comment, setComment] = useState(comments?.comment);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const errors = [];
    if (comment?.length < 1) {
      errors.push("edit must be at least 1 character long");
    }
    setValidationErrors(errors);
  }, [comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setShowErrors(true);

    const editComment = {
      id: comments.id,
      comment,
    };
    if (validationErrors.length === 0) {
      let updatedComment;
      updatedComment = await dispatch(updateComment(editComment));
      // setComment("");
      if (updatedComment) {
        setValidationErrors([]);
        setShowErrors(false);
        prop.setShowModal(false);
      }
    }
  };

  return (
    <div className="edit">
      {showErrors && (
        <div className="new-comment-form-errors">
          {validationErrors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
      <form className="editcommentform" onSubmit={handleSubmit}>
        <textarea
          className="edit-comment"
          type="text"
          name="comment"
          placeholder="Comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        {/* <button>Cancel</button> */}
        <button className="edit-comment-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditCommentForm;
