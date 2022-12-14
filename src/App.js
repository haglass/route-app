import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
import Player from "./pages/Player";
import PlayerIndex from "./pages/PlayerIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // 멤버 목록 데이터
  // useState는 useState가 변경되면 실행된느 Hook이다
  // useState()를 실행한면 []리던된다
  // 배열은 [state, state업데이트함수]돌려받는다
  // 배열은 [getter, setter ]돌려받는다
  // useState(초기값): 초기값이라 함은 state의 초기값
  const [members] = useState([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
  ]);

  // 플레이 리스트 ATSTE
  // state props가 바쒸어야 함
  const [songs] = useState([
    {
      id: 1,
      title: "Fallin' for you",
      musician: "Colbie callet",
      youtube_link: "PABUl_EX_hw",
    },
    {
      id: 2,
      title: "Can't hurry love",
      musician: "The supremes",
      youtube_link: "EJDPhjQft04",
    },
    {
      id: 3,
      title: "Landslide",
      musician: "Dixie chicks",
      youtube_link: "V2N7gYom9-A",
    },
    {
      id: 4,
      title: "Can't let go",
      musician: "Linda ronstadt",
      youtube_link: "P-EpGKXmoe4",
    },
    {
      id: 5,
      title: "Doctor my eyes",
      musician: "Jackson Browne",
      youtube_link: "7JlFKS_1oZk",
    },
    {
      id: 6,
      title: "We gotta get you a woman",
      musician: "Todd Rundgren",
      youtube_link: "EyUjbBViAGE",
    },
    {
      id: 7,
      title: "Hip to my heart",
      musician: "Band Perry",
      youtube_link: "vpLCFnD9LFo",
    },
    {
      id: 8,
      title: "Rolling in the deep",
      musician: "Adele",
      youtube_link: "EvK8pDK6IQU",
    },
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title="인디밴드" />} />
          <Route path="/members" element={<Members members={members} />} />
          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<PlayerIndex />} />
            <Route path=":id" element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
