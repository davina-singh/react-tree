import { useState, useEffect } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  async function getPhotos(queryParam) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=cqkAsE8dh3_d4bhetGMcWC4t4tWVQ5eN0i0MSTQ-tQY`
    );
    const data = await response.json();
    console.log(data);
    setPhotos(data.results);
  }

  useEffect(() => {
    // code that I do not need to do everytime the component re-renders
    getPhotos(query);
  }, [query]);

  return (
    <div>
      <p>{input}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(input);
        }}
      >
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.urls.small} />
        </div>
      ))}
    </div>
  );
}
