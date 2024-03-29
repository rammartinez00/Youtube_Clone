import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getVideoById, deleteAVideo, getAllVideos } from "../../store/videos";
import { getAllComments, deleteAComment } from "../../store/comments";
import EditVideoModal from "../VideoEdit";
import EditCommentModal from "../EditComment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import NewCommentForm from "../NewComment";
import EditCommentForm from "../EditComment";
import "./index.css";

const VideoPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [shown, setShown] = useState(false);
  const [editShown, setEditShown] = useState(false);
  const [deleteShown, setDeleteShown] = useState(false);
  const [update, setUpdate] = useState(false);

  const videos = useSelector((state) => state.videos);
  const comments = useSelector((state) => state.comments);
  const video = videos[id];
  const commentsArr = Object.values(comments);

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getAllComments(id));
    dispatch(getAllVideos());
  }, [dispatch, update, id]);
  const date = video?.created_at?.split(" ").slice(0, 4).join(" ");

  const state = { editShown, setEditShown };
  return (
    <div>
      <div className="video-page-container">
        <div className="video-page-container-1">
          <div className="video-page-container-1-1">
            <ReactPlayer
              url={video?.video}
              controls={true}
              light={video?.thumbnail}
              width="80%"
              height="600px"
            />
          </div>
          <div className="video-page-container-1-2">
            <div className="vid-title-info">
              <h4 style={{ color: "#f6f3ee", margin: 0, marginTop: 10 }}>
                {video?.title}
              </h4>
              <p style={{ fontSize: 12, color: "#f6f3ee" }}>{date}</p>
              {user?.id == video?.userId && (
                <div className="video-admin-btns">
                  <EditVideoModal />
                  <button
                    onClick={() => {
                      dispatch(deleteAVideo(video?.id));
                      setUpdate(!update);
                      history.push("/");
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                    &nbsp;Delete Video
                  </button>
                </div>
              )}
            </div>

            {shown && (
              <div className="desc-box">
                <h4 className="video-description">{video?.about}</h4>
              </div>
            )}
            <button
              className="about-button"
              onClick={() => {
                setShown(!shown);
              }}
            >
              {shown ? "show less" : "show more"}
            </button>
          </div>
          <div className="comments-section">
            <h1>{commentsArr?.length}&nbsp; Comments</h1>
            {user && <NewCommentForm />}
            {commentsArr?.reverse()?.map((comment) => (
              <div className="comment-container" key={comment.id}>
                <div className="comment-container-1">
                  <div className="comment-content">
                    <p>username: &nbsp;{comment?.user?.username}</p>
                    <p>{comment?.comment}</p>
                    <p>{new Date(comment?.created_at)?.toDateString()}</p>
                  </div>
                  {comment?.userId === user?.id && (
                    <div>
                      <div className="comment-btns">
                        {/* <button
                          className="btn edit-btn"
                          onClick={() => {
                            setEditShown(
                              editShown == comment?.id ? "" : comment?.id
                            );
                          }}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button> */}
                        <EditCommentModal comments={comment} />
                        <button
                          className="btn del-btn"
                          onClick={() => {
                            setDeleteShown(
                              deleteShown == comment?.id ? "" : comment?.id
                            );
                          }}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                        {deleteShown == comment?.id && (
                          <button
                            className="btn del-btn2"
                            onClick={() => {
                              dispatch(deleteAComment(comment.id));
                              dispatch(getAllComments(id));
                            }}
                          >
                            Delete Comment
                          </button>
                        )}
                      </div>
                      {/* {editShown == comment?.id && (
                        <EditCommentForm comment={comment} state={state} />
                      )} */}
                    </div>
                  )}
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
