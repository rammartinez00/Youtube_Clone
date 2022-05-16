import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getVideoById, deleteAVideo, getAllVideos } from "../../store/videos";
import { getAllComments, deleteAComment } from "../../store/comments";
import EditVideoModal from "../VideoEdit";

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
  }, [dispatch, update, id]);
  const date = video?.created_at?.split(" ").slice(0, 4).join(" ");

  // console.log(date);
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
            <div className="vid-title-info">
              <h2>{video?.title}</h2>
              <h5>{date}</h5>
            </div>

            {shown && (
              <div>
                <h4>{video?.about}</h4>
                {user?.id == video?.userId && (
                  <div>
                    <EditVideoModal />
                    <button
                      className="btn delete-btn"
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
            {/* <NewCommentForm /> */}
            {commentsArr?.reverse()?.map((comment) => (
              <div className="comment-container" key={comment.id}>
                <div className="comment-container-1">
                  <div className="comment-content">
                    <p>{comment?.comment}</p>
                    <p>
                      {comment?.updated_at?.split(" ").slice(0, 4).join(" ")}
                    </p>
                  </div>
                  {comment?.userId === user?.id && (
                    <div>
                      <div className="comment-btns">
                        <button
                          className="btn edit-btn"
                          onClick={() => {
                            setEditShown(!editShown);
                          }}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="btn del-btn"
                          onClick={() => {
                            setDeleteShown(!deleteShown);
                          }}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                        {deleteShown && (
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
                      {editShown && <EditCommentForm comments={comment} />}
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
