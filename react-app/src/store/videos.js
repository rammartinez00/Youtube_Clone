const GET_VIDEOS = "videos/GET_VIDEOS";
const GET_VIDEO = "video/GET_VIDEO";

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

const videoReducer = (state = [], action) => {
  switch (action.type) {
    case GET_VIDEOS:
      const newState = {};
      action.payload.videos.forEach((video) => {
        newState[video.id] = video;
      });
      return newState;
    case GET_VIDEO:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
export default videoReducer;
