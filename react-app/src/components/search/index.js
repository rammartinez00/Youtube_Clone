import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.css";

const SearchBar = () => {
  const history = useHistory();
  const videos = useSelector((state) => state.videos);
  const videoArr = Object.values(videos).map((video) => [
    video.title,
    video.about,
    video.id,
  ]);

  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setFilteredList(
      videoArr.filter(
        (video) =>
          video[0].toLowerCase().includes(search.toLowerCase()) ||
          video[1].toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  function handleSubmit(e) {
    e.preventDefault();
    if (filteredList.length > 0) {
      setShow(true);
      history.push(`/videos/${filteredList[0][2]}`);
    }
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar-input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {search != "" && (
        <div className="search-result">
          <ul className="searchresult-list">
            {filteredList.map((video) => (
              <li
                key={video.id}
                value={video.title}
                onClick={() => history.push(`/videos/${video[2]}`)}
              >
                {video[0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
