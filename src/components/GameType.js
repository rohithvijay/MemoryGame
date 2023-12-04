

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome
} from "@fortawesome/free-solid-svg-icons";

const GameType = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-screen home-bg bg-cover">
        <Link
        to="/"
        className="flex items-center p-5 fixed left-4 top-5 text-white text-3xl z-20"
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="py-5 sm:py-20 px-5 grid grid-cols-1 md:px-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-x-36 md:gap-y-12 justify-center text-center tech">
      <Link
        to="/game1"
        className="p-5 bg-customBlue rounded-full text-center animate-scale"
      >
        {/* <FontAwesomeIcon icon={faPlayCircle} className="text-white text-5xl" /> */}
        <h2 className="font-bold text-3xl text-white">EASY</h2>
      </Link>
      <Link
        to="/game2"
        className=" p-5 bg-customBlue text-center rounded-full animate-scale"
      >
        {/* <FontAwesomeIcon icon={faPlayCircle} className="text-white text-5xl" /> */}
        <h2 className="font-bold text-3xl text-white">MEDIUM</h2>
      </Link>
      <Link
        to="/game3"
        className="p-5 bg-customBlue rounded-full text-center animate-scale"
      >
        {/* <FontAwesomeIcon icon={faPlayCircle} className="text-white text-5xl" /> */}
        <h2 className="font-bold text-3xl text-white">HARD</h2>
      </Link>
        </div>
    </div>
  );
};
export default GameType;
