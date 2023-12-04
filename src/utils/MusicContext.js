import React, { createContext, useState, useRef, useEffect } from "react";
import music from "./../assets/gameMusic.mp3";

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
      <audio
        ref={audioRef}
        src={music} // Replace with your audio file
        autoPlay={isPlaying}
        loop
        style={{ display: "none" }} // Hide the audio element
      />
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicProvider };
