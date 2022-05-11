const GET_COMMENTS = "comments/GET_COMMENTS";
const POST_COMMENT = "comments/POST_COMMENT";
const PUT_COMMENT = "comments/PUT_COMMENT";
const DEL_COMMENT = "comments/DEL_COMMENT";

const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
};

const postComment = (comment) => {
  return {
    type: POST_COMMENT,
    payload: comment,
  };
};

export const getAllComments = (id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${id}`);
  if (response.ok) {
    const comments = await response.json();
    dispatch(getComments(comments));
    return response;
  }
};

export const postNewComment = (id, comment) => async (dispatch) => {
  const response = await fetch(`/api/comments/add/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  if (response.ok) {
    const newComment = await response.json();
    dispatch(postComment(newComment));
    return response;
  }
};

const commentReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = {};
      action.payload.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case POST_COMMENT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
