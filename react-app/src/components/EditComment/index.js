import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateComment } from "../../store/comments";

const EditCommentForm = ({ comments }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  //   const comments = useSelector((state) => state.comments);
  const user = useSelector((state) => state.session.user);

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
      setValidationErrors([]);
      setShowErrors(false);
    }
  };

  return (
    <div className="new-comment-form-container edit">
      {showErrors && (
        <div className="new-comment-form-errors">
          {validationErrors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="new-comment-input"
          type="text"
          name="comment"
          placeholder="Comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button className="new-comment-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditCommentForm;
