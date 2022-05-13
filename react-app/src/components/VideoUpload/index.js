import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.css";

import { postVideoAction } from "../../store/videos";

const UploadVideo = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [videoLoading, setVideoLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!title) {
      errors.push("Title is required");
    }
    if (!about) {
      errors.push("About is required");
    }
    if (!video) {
      errors.push("Video is required");
    }
    setValidationErrors(errors);
  }, [title, about, video]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setVideoLoading(true);
    setHasSubmitted(true);
    setShowErrors(true);

    const videoData = {
      title,
      about,
      video,
    };

    // if (validationErrors.length === 0) {
    await dispatch(postVideoAction(videoData));
    history.push("/");
    //   setAbout("");
    //   setTitle("");
    //   setVideo(null);
    //   setVideoLoading(false);
    //   setHasSubmitted(false);
    //   setShowErrors(false);
    // }
  };
  const updateVideo = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  return (
    <form className="uploadForm" onSubmit={handleSubmit}>
      <div>
        {showErrors && (
          <ul className="errors">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="about"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <input type="file" name="file" onChange={updateVideo} />
      <button type="submit">Submit</button>
      {videoLoading && <p>Loading...</p>}
    </form>
  );
};

export default UploadVideo;
