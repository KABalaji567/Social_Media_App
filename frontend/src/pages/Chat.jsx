import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Chat Screen</h1>

      <div
        style={{
          border: "1px solid black",
          height: "300px",
          overflowY: "scroll",
          padding: "10px",
        }}
      >
        <p>User1: Hello</p>
        <p>User2: Hi</p>
      </div>

      <br />

      <input
        type="text"
        placeholder="Type message"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button>Send</button>
    </div>
  );
}