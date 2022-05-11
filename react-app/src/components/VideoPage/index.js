import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getVideoById } from "../../store/videos";
// import "./index.css";

const VideoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const videos = useSelector((state) => state.videos);
  const video = videos[id];

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  console.log(video);

  return (
    <div>
      <div className="video-page-container">
        <div className="video-page-container-1">
          <div className="video-page-container-1-1">
            <img
              src={video?.thumbnail}
              alt={video?.title}
              height={200}
              width={300}
            />
          </div>
          <div className="video-page-container-1-2">
            <h1>{video?.title}</h1>
            <h2>{video?.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPage;
