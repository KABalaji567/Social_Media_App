import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MyPosts from "./pages/MyPosts";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route path="/home" element={<Home />} />

        <Route
          path="/myposts"
          element={<MyPosts />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;