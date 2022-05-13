import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { getAllVideos } from "../../store/videos";
import ReactPlayer from "react-player";

const Landing = () => {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.videos);

  const videoArr = Object.values(videos);

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  const vidStyle = {
    width: 100,
    height: 100,
  };
  // console.log(videoArr);

  return (
    <div>
      <div className="landing-content-box-1-container">
        {videoArr.map((video) => (
          <div className="landing-content-box-1" key={video.id}>
            <NavLink to={`/videos/${video.id}`}>
              <ReactPlayer
                width="100%"
                height="100%"
                className="landing-content-box-1-img"
                url={video?.video}
                style={vidStyle}
              />
            </NavLink>
            <a className="vid-title" href={`/videos/${video.id}`}>
              <p className="vid-title">{video.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
