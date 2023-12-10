import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameData } from "../data/gameData";
import { Link } from "react-router-dom";
import CardBlock from "./cardBlock";
import {
  faPlayCircle,
  faSmileBeam,
  faRotateBackward,
  faSadTear,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GameHard = () => {
  const tempGameData = gameData.hardCards;
  const [cards, setCards] = useState(tempGameData);
  const [clickedCards, setClickedCards] = useState([]);
  const [timer, setTimer] = useState(45);
  const [timerInterval, setTimerInterval] = useState(null);
  const [gameWon, setGameWon] = useState(false);
  const handleCardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);

    if (!clickedCard.isRotated && clickedCards.length < 2) {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, isRotated: true } : card
      );
      setClickedCards([...clickedCards, clickedCard]);
      setCards(updatedCards);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (clickedCards.length === 2) {
        if (clickedCards[0].icon.iconName !== clickedCards[1].icon.iconName) {
          const updatedCards = cards.map((card) =>
            clickedCards ? { ...card, isRotated: false } : card
          );
          setCards(updatedCards);
        } else {
          const updatedCards = cards.map((card) =>
            clickedCards.some((clicked) => clicked.id === card.id)
              ? { ...card, isMatched: true }
              : card
          );
          setCards(updatedCards);
          toast.success("Match Found! Good Work", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500,
          });
        }
        setClickedCards([]);
      } else if(cards.length > 0){
        const allCardsMatched = cards.every((card) => card.isMatched);
        if (allCardsMatched) {
          setGameWon(true);
          setCards([]);
        }
      }
    }, 500); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, [clickedCards, cards]);

  // Shuffle cards when the component re-renders
  useEffect(() => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  }, []);

  const playAgain = () => {
    setCards(gameData.hardCards);
    setTimer(45);
    if (timerInterval) {
      clearInterval(timerInterval); // Clear the previous interval
    }
    const newInterval = setInterval(() => {
      TimerCheck(newInterval);
    }, 1000);
    setTimerInterval(newInterval);
  };

  const TimerCheck = (interval) => {
    setTimer((prevTimer) => {
      if (prevTimer > 0) {
        return prevTimer - 1;
      } else {
        setCards([]);
        clearInterval(interval);
        setTimerInterval(null);
        return 0;
      }
    });
  };

  useEffect(() => {
    const initialInterval = setInterval(() => {
      TimerCheck(initialInterval);
    }, 1000);
    setTimerInterval(initialInterval);

    return () => clearInterval(initialInterval);
  }, []); // Run this effect only once on mount

  // Convert seconds to MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return cards.length > 0 ? (
    <div>
      <Link
        to="/type"
        className="flex items-center p-5 fixed left-4 top-5 text-white text-3xl z-20"
      >
        <FontAwesomeIcon icon={faRotateBackward} />
      </Link>
      <ToastContainer />
      <div className="container lg:px-56 bg-game-cover1 bg-cover h-full min-w-full min-h-screen flex items-center justify-center">
        <div className="text-white font-bold fixed top-10 right-10 z-20 text-2xl">
          <FontAwesomeIcon icon={faClock} /> {formatTime(timer)}
        </div>
        <div className="card-inner">
          <div className="py-5 sm:py-20 px-5 grid grid-cols-4 md:px-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-x-28 md:gap-y-12 justify-center text-center">
            {cards.map((card, index) => (
              <div
                className={`card ${
                  card.isRotated ? "is-flipped" : ""
                } m-h-64 text-3xl sm:text-5xl h-20 w-20 sm:h-24 sm:w-24 text-gray-800 shadow-lg   text-center cursor-pointer relative
                ${card.isMatched ? "matched" : ""}`}
                key={card.id}
                onClick={() => handleCardClick(card.id)}
              >
                <CardBlock icon={card.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : gameWon  ? (
    /* Content to render when timer > 0 */
    <div>
      <Link
        to="/type"
        className="flex items-center p-5 fixed left-4 top-5 text-white text-3xl"
      >
        <FontAwesomeIcon icon={faRotateBackward} />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen bg-game-cover1 bg-cover min-h-screen">
        <FontAwesomeIcon icon={faSmileBeam} className="text-white text-5xl" />
        <h1 className="text-white font-bold text-5xl mb-10">Congrats !!!</h1>
        <button
          className="flex items-center p-5 bg-customWood rounded-full animate-scale"
          onClick={() => playAgain()}
        >
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="text-white text-5xl"
          />
          <h2 className="font-bold text-2xl lg:text-5xl text-white pl-5">
            PLAY AGAIN
          </h2>
        </button>
      </div>
    </div>
  ) : (
    <div>
      <Link
        to="/type"
        className="flex items-center p-5 fixed left-4 top-5 text-white text-3xl"
      >
        <FontAwesomeIcon icon={faRotateBackward} />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen bg-game-cover1 bg-cover min-h-screen">
        <FontAwesomeIcon icon={faSadTear} className="text-white text-5xl" />
        <h1 className="text-white font-bold text-5xl mb-10">Game Over</h1>
        <button
          className="flex items-center p-5 bg-customWood rounded-full animate-scale"
          onClick={() => playAgain()}
        >
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="text-white text-5xl"
          />
          <h2 className="font-bold text-2xl lg:text-5xl text-white pl-5">
            PLAY AGAIN
          </h2>
        </button>
      </div>
    </div>
  );
};

export default GameHard;
