import { faDiagnoses } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getAllVideos, updateAVideo, getVideoById } from "../../store/videos";

const EditVideo = ({ prop }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();

  const user = useSelector((state) => state.session.user);
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
  }, [dispatch, prop.showModal]);

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

    await dispatch(updateAVideo(videoData));
    setHasSubmitted(false);
    prop.setShowModal(!prop.showModal);

    // history.push("/");
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditVideo;
