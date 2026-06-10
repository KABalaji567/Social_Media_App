import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <br />

      <button>Login</button>
    </div>
  );
}