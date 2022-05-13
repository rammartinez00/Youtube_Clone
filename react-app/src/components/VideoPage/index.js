import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { getVideoById, deleteAVideo, getAllVideos } from "../../store/videos";
import { getAllComments, deleteAComment } from "../../store/comments";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import NewCommentForm from "../NewComment";
import EditCommentForm from "../EditComment";
// import "./index.css";

const VideoPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [shown, setShown] = useState(false);
  const [editShown, setEditShown] = useState(false);
  const [deleteShown, setDeleteShown] = useState(false);
  const [update, setUpdate] = useState(false);
  // console.log(id);

  const videos = useSelector((state) => state.videos);
  const comments = useSelector((state) => state.comments);
  const video = videos[id];
  const commentsArr = Object.values(comments);

  const user = useSelector((state) => state.session.user);
  // console.log(commentsArr);

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getAllComments(id));
    dispatch(getAllVideos());
  }, [dispatch, update]);

  return (
    <div>
      <div className="video-page-container">
        <div className="video-page-container-1">
          <div className="video-page-container-1-1">
            <ReactPlayer
              url={video?.video}
              controls={true}
              light={video?.thumbnail}
            />
          </div>
          <div className="video-page-container-1-2">
            <h1>{video?.title}</h1>
            <button
              onClick={() => {
                setShown(!shown);
              }}
            >
              {shown ? "show less" : "show more"}
            </button>
            {shown && (
              <div>
                <h2>{video?.about}</h2>
                {user?.id == video?.userId && (
                  <button
                    onClick={() => {
                      dispatch(deleteAVideo(video?.id));
                      setUpdate(!update);
                      history.push("/");
                    }}
                  >
                    Delete Video
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="comments-section">
            <h1>Comments</h1>
            {user && <NewCommentForm />}
            {/* <NewCommentForm /> */}
            {commentsArr?.map((comment) => (
              <div className="comment-container" key={comment.id}>
                <div className="comment-container-1">
                  {comment?.userId === user?.id && (
                    <>
                      <button
                        onClick={() => {
                          setEditShown(!editShown);
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      {editShown && <EditCommentForm comments={comment} />}
                      <button
                        onClick={() => {
                          setDeleteShown(!deleteShown);
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                      {deleteShown && (
                        <button
                          onClick={() => {
                            dispatch(deleteAComment(comment.id));
                            dispatch(getAllComments(id));
                          }}
                        >
                          Delete Comment
                        </button>
                      )}
                    </>
                  )}
                  {/* <EditCommentForm comment={comment} /> */}
                  <p>{comment?.comment}</p>
                  <p>{comment?.updated_at}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPage;
