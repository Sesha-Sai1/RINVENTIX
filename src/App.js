import "./App.css";
import MainchatReference from "./components/MainchatReference";
import MainChat from "./components/MainChat";
import MainChatScreen from "./components/MainChatScreen";
import Sidebar from "./components/Sidebar";
import UserChatReference from "./components/UserChatReference";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainchatReference />} />
        <Route path="/userReference" element={<UserChatReference />} />
      </Routes>
    </div>
  );
}

export default App;
