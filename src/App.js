import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Member from "./pages/Member";
import SongList from "./pages/SongList";

const App = () => {
  return (
    <div className="cantainer">
      <Header />
      <Home />
      <About />
      <Member />
      <SongList />
    </div>
  );
};

export default App;
