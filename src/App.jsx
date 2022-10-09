import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayouts from "./layouts/Mainlayouts";
import Songs from "./components/songs-main/Songs";
import Library from "./components/librarys/Library";
import PlayList from "./components/playlist/PlayList";
import LikedSongs from "./components/likedSongs/LikedSongs";

function App() {
  return (
    <BrowserRouter>
      <div className="App p-2">
        <Routes>
          <Route path="/" element={<Mainlayouts />}>
            <Route index element={<Songs />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/likedsong" element={<LikedSongs />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
