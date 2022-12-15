import React, { useEffect, useState } from "react";

// axios API
import instance from "./api/axios";
import requests from "./api/request";

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
  const [members, setMembers] = useState([]);

  // 플레이 리스트 ATSTE
  // state props가 바쒸어야 함
  const [songs, setSongs] = useState([]);
  // 외부데이터가지고 오기
  const fetchData = async () => {
    // 멤버목록 가져오기
    const resultMember = await instance.get(requests.fetchMember);
    setMembers(resultMember.data);
    // 송목록 가져오기
    const resultSong = await instance.get(requests.fetchSong);
    setSongs(resultSong.data);
    // setSongs();
  };

  useEffect(() => {
    fetchData();
  }, []);

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
