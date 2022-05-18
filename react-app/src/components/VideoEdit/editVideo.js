import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.css";

import { ReactComponent as GoogleLogo } from "../../img/Google.svg";

import { getAllVideos, updateAVideo, getVideoById } from "../../store/videos";

const EditVideo = ({ prop }) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  // const user = useSelector((state) => state.session.user);
  const videos = useSelector((state) => state.videos);

  const this_video = videos[id];

  console.log(this_video);

  const [title, setTitle] = useState(this_video?.title);
  const [about, setAbout] = useState(this_video?.about);

  // const [videoLoading, setVideoLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    dispatch(getAllVideos());
    dispatch(getVideoById(id));
  }, [dispatch, prop.showModal, id]);

  useEffect(() => {
    const errors = [];
    if (!title) {
      errors.push("Title is required");
    }
    if (!about) {
      errors.push("About is required");
    }

    setValidationErrors(errors);
  }, [title, about]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setVideoLoading(true);
    setHasSubmitted(true);
    setShowErrors(true);

    const videoData = {
      id: id,
      title,
      about,
    };

    if (validationErrors.length === 0) {
      await dispatch(updateAVideo(videoData));
      await dispatch(getVideoById(id));
      setHasSubmitted(false);
      prop.setShowModal(!prop.showModal);

      // history.push("/");
    }
  };

  return (
    <div className="modal-form-container  edit-video">
      <GoogleLogo />

      <form onSubmit={handleSubmit}>
        <div>
          {showErrors && (
            <ul className="errors">
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="login-container">
          <input
            placeholder="Video Title"
            className="login-input"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="login-container">
          <textarea
            placeholder="Video Description"
            className="login-input"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <button type="submit" className="video-edit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditVideo;
