
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Game from "./Game";
import Home from "./Home";
import Instruction from "./instruction";

const Body = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/instruction" element={<Instruction />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Body;
