import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postNewComment } from "../../store/comments";

import "./index.css";

const NewCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.session.user);

  const [comment, setComment] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const errors = [];
    if (comment.length < 1) {
      errors.push("Comment must be at least 1 character long");
    }
    setValidationErrors(errors);
  }, [comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setShowErrors(true);

    const newComment = {
      videoId: id,
      userId: user.id,
      comment: comment,
    };
    if (validationErrors.length === 0) {
      let postComment;
      postComment = await dispatch(postNewComment(id, newComment));
      if (postComment) {
        setComment("");
        setValidationErrors([]);
        setShowErrors(false);
      }
    }
  };

  return (
    <div className="new-comment-form-container">
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
export default NewCommentForm;
