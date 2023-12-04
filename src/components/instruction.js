import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { gameData } from "./../data/gameData";

import { faHome, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Instruction = () => {
  const gameStart = gameData.gettingStarted.split(".");
  const gamePlay = gameData.gamePlay.split(".");
  return (
    <div className="flex h-full min-h-screen items-start justify-center home-bg bg-cover flex-col px-10 py-16 lg:py-0 sm:px-40">
      <Link
        to="/"
        className="flex items-center p-5 fixed left-4 top-5 text-white text-3xl"
      >
        <FontAwesomeIcon icon={faHome} className="" />
      </Link>
      <h2 className="text-white text-2xl md:text-5xl mb-5 text-left font-bold">Getting Started</h2>
      <ul>
        {gameStart.map((card, index) => (
          <li className="text-white text-lg md:text-2xl mb-2 text-left" key = {index}>
            <span>
              <FontAwesomeIcon icon={faAngleRight} className="pr-2 font-bold text-lg md:text-2xl" />
            </span>
            {card}
          </li>
        ))}
      </ul>
      <h2 className="text-white text-2xl md:text-5xl mb-5 mt-5 text-left font-bold">GamePlay</h2>
      <ul>
        {gamePlay.map((card, index) => (
          <li className="text-white text-lg md:text-2xl mb-2 text-left" key= {index}>
            <span>
              <FontAwesomeIcon icon={faAngleRight} className="pr-2 font-bold text-lg md:text-2xl" />
            </span>{card}</li>
        ))}
      </ul>
    </div>
  );
};
export default Instruction;
