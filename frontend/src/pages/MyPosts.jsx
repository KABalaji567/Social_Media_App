import { useState } from "react";

export default function MyPosts() {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>My Posts</h1>

      <textarea
        rows="4"
        cols="50"
        placeholder="Create Post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button>Create Post</button>

      <hr />

      <h3>Your Posts</h3>
    </div>
  );
}