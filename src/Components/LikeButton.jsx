import { useState } from "react";

export default function Like() {
  const [like, setLike] = useState(false);
  return (
    <div className="likeButton">
      <button
        onClick={() => {
          setLike(!like);
        }}
      >
        {like ? "❤️" : "🤍"}
      </button>
      {/* {like && <p>❤️</p>} */}
    </div>
  );
}
