import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch posts API here
  }, []);

  return (
    <div>
      <h1>Home Feed</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.author}</h3>

          <p>{post.content}</p>

          <button>👍 Like</button>

          <button>👎 Dislike</button>

          <button>💬 Comment</button>
        </div>
      ))}
    </div>
  );
}