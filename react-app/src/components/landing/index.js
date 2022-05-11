import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { getAllVideos } from "../../store/videos";

const Landing = () => {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.videos);

  const videoArr = Object.values(videos);

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  console.log(videoArr);

  return (
    <div>
      <div className="landing-content-box-1-container">
        {videoArr.map((video) => (
          <div className="landing-content-box-1" key={video.id}>
            <NavLink to={`/videos/${video.id}`}>
              <img
                className="landing-content-box-1-img"
                src={video.thumbnail}
                alt={video.title}
              />
              <p className="vid-title">{video.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
