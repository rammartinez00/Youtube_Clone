import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { getAllVideos } from "../../store/videos";
import ReactPlayer from "react-player";
import Sidebar from "../sidebar";

const Landing = () => {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.videos);

  const videoArr = Object.values(videos);

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  return (
    <div>
      <Sidebar />
      <div className="landing-content-box-1-container">
        {videoArr?.map((video) => (
          <div className="landing-content-box-1" key={video?.id}>
            <NavLink to={`/videos/${video?.id}`}>
              <ReactPlayer
                width="300px"
                height="200px"
                className="landing-content-box-1-img"
                url={video?.video}
                light={video?.thumbnail}
                // playIcon={false}
                // autoplay={true}
                // controls={true}
              />
            </NavLink>
            <div
            // style={{ marginLeft: 20 }}
            >
              <a className="vid-title" href={`/videos/${video?.id}`}>
                <p className="vid-title" style={{ margin: 0, marginTop: 10 }}>
                  {video?.title}
                </p>
              </a>

              <p
                className="vid-title"
                style={{ fontSize: 12, color: "#f6f3ee", margin: 0 }}
              >
                {video?.user?.username}
              </p>
              <p style={{ fontSize: 12, color: "#f6f3ee", margin: 0 }}>
                {timeSince(new Date(video?.created_at))} ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
