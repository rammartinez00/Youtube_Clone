import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.css";

import { postVideoAction } from "../../store/videos";

import { ReactComponent as GoogleLogo } from "../../img/Google.svg";

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
    const fileTypes = ["mp4", "3gp", "mov", "m4a", "m4v"];
    if (!title) {
      errors.push("Title is required");
    }
    if (title.length > 100) {
      errors.push("Title must be less than 100 characters");
    }
    if (!about) {
      errors.push("About is required");
    }
    if (!video) {
      errors.push("Video is required");
    }
    if (!fileTypes.includes(video?.name?.split(".").pop())) {
      errors.push("file type is not supported");
    }
    setValidationErrors(errors);
  }, [title, about, video]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    setShowErrors(true);

    const videoData = {
      title,
      about,
      video,
    };

    if (validationErrors.length === 0) {
      setVideoLoading(true);
      await dispatch(postVideoAction(videoData));
      history.push("/");
      //   setAbout("");
      //   setTitle("");
      //   setVideo(null);
      setVideoLoading(false);
      //   setHasSubmitted(false);
      //   setShowErrors(false);
    }
  };
  const updateVideo = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  return (
    <form className="uploadForm" onSubmit={handleSubmit}>
      {/* <GoogleLogo /> */}
      <h2>Video Upload</h2>
      <div className="upload-errors">
        {showErrors && (
          <ul className="errors">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </div>
      <input
        className="file-input"
        type="file"
        name="file"
        onChange={updateVideo}
      />
      <div>
        <label htmlFor="title">Title &nbsp;</label>
        <input
          className="upload-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="about">about&nbsp;</label>
        <textarea
          className="upload-input"
          name="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <button type="submit" className="btn upload-btn">
        Submit
      </button>
      {videoLoading && <p>Loading...</p>}
    </form>
  );
};

export default UploadVideo;
