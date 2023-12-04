
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Instruction from "./instruction";
import GameEasy from './GameEasy';
import GameMedium from './GameMedium';
import GameHard from './GameHard';
import GameType from './GameType';

const Body = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type" element={<GameType />} />
          <Route path="/game1" element={<GameEasy />} />
          <Route path="/game2" element={<GameMedium />} />
          <Route path="/game3" element={<GameHard />} />
          <Route path="/instruction" element={<Instruction />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Body;
