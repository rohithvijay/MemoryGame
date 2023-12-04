import React, { useContext  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MusicContext } from '../utils/MusicContext';

import {
  faPlayCircle,
  faQuestion,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const { isPlaying, toggleAudio } = useContext(MusicContext);
  const playPauseAudio = () => {
    toggleAudio(); // Toggle music playback
  };
  return (
    <div className="flex h-screen items-center justify-center home-bg bg-cover">
      <Link
        to="/Game"
        className="flex items-center p-5 bg-customBlue rounded-full animate-scale"
      >
        <FontAwesomeIcon icon={faPlayCircle} className="text-white text-5xl" />
        <h2 className="font-bold text-5xl text-white pl-5">PLAY</h2>
      </Link>
      <div className="fixed flex bottom-5 right-5 flex-col">
        <div>
          <button onClick={playPauseAudio} className="flex items-center p-12 w-5 h-5 mb-5 bg-customBlue rounded-full justify-center opacity-60 hover:opacity-100">
            {isPlaying  ? (
              <FontAwesomeIcon icon={faVolumeUp}  className="text-white text-5xl"/>
            ) : (
              <FontAwesomeIcon icon={faVolumeMute} className="text-white text-5xl" />
            )}
          </button>
        </div>
        <Link
          to="/Instruction"
          className="flex items-center p-12 w-5 h-5 bg-customBlue rounded-full justify-center opacity-60 hover:opacity-100"
        >
          <FontAwesomeIcon icon={faQuestion} className="text-white text-5xl" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
