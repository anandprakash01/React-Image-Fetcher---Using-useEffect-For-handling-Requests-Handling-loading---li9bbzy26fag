import React, { useState } from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState({});
  const BASE_URL = "https://jsonplaceholder.typicode.com/photos/";

  const fetchApi = async (id) => {
    if (id == 0) {
      setPhoto({});
      return;
    }
    setIsLoading(true);
    const response = await fetch(BASE_URL + id);
    const data = await response.json();
    setIsLoading(false);
    setPhoto(data);
  };
  function handleChange(event) {
    let value = event.target.value;
    fetchApi(value);
  }

  return (
    <div id="main">
      <label htmlFor="input">Id number</label>
      <input id="input" type="number" onChange={handleChange} />
      {isLoading && <Loader />}
      {photo.id > 0 && <PhotoFrame {...photo} />}
    </div>
  );
};
export default App;
