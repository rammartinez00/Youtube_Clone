const GET_VIDEOS = "videos/GET_VIDEOS";
const GET_VIDEO = "video/GET_VIDEO";
const POST_VIDEO = "video/POST_VIDEO";

const getVideos = (videos) => {
  return {
    type: GET_VIDEOS,
    payload: videos,
  };
};

const getVideo = (video) => {
  return {
    type: GET_VIDEO,
    payload: video,
  };
};

const postVideo = (video) => {
  return {
    type: POST_VIDEO,
    video,
  };
};

export const getAllVideos = () => async (dispatch) => {
  const response = await fetch("/api/videos/");
  if (response.ok) {
    const videos = await response.json();
    dispatch(getVideos(videos));
    return response;
  }
};

export const getVideoById = (id) => async (dispatch) => {
  const response = await fetch(`/api/videos/${id}`);
  if (response.ok) {
    const video = await response.json();
    dispatch(getVideo(video));
    return response;
  }
};

export const postVideoAction = (videostuff) => async (dispatch) => {
  const { title, about, video } = videostuff;

  const formData = new FormData();

  formData.append("title", title);
  formData.append("about", about);

  if (video) {
    formData.append("video", video);
  }

  const response = await fetch(`/api/videos/upload`, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(postVideo(data));
    // return response;
  }
};

const videoReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case GET_VIDEOS:
      newState = {};
      action.payload.videos.forEach((video) => {
        newState[video.id] = video;
      });
      return newState;
    case GET_VIDEO:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case POST_VIDEO:
      newState = { ...state };
      newState[action.video.video.id] = action.video.video;
      return newState;
    default:
      return state;
  }
};
export default videoReducer;
