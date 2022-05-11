import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getVideoById } from "../../store/videos";
import { getAllComments } from "../../store/comments";
// import "./index.css";

const VideoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const videos = useSelector((state) => state.videos);
  const comments = useSelector((state) => state.comments);
  const video = videos[id];
  const commentsArr = Object.values(comments);
  console.log(commentsArr);

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getAllComments(id));
  }, [dispatch]);

  // console.log(video);

  return (
    <div>
      <div className="video-page-container">
        <div className="video-page-container-1">
          <div className="video-page-container-1-1">
            <ReactPlayer url={video?.video} controls={true} />
          </div>
          <div className="video-page-container-1-2">
            <h1>{video?.title}</h1>
            <h2>{video?.about}</h2>
          </div>
          <div className="comments-section">
            <h1>Comments</h1>
            {commentsArr.map((comment) => (
              <div className="comment-container" key={comment.id}>
                <div className="comment-container-1">
                  <p>{comment?.comment}</p>
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