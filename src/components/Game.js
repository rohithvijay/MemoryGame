import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameData } from "./../data/gameData";
import { Link } from "react-router-dom";
import {
  faPlayCircle,
  faSmileBeam,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Game = () => {
  const tempGameData = gameData.cards;
  const [cards, setCards] = useState(tempGameData);
  const [clickedCards, setClickedCards] = useState([]);
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
  const playAgain = () => {
    setCards(gameData.cards);
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
          let filteredElements = cards.filter((card) => !card.isRotated);
          setCards(filteredElements);
          toast.success("Match Found! Good Work", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500,
          });
        }
        setClickedCards([]);
      }
    }, 500); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, [clickedCards, cards]);

  useEffect(() => {
    // Shuffle cards when the component re-renders
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  }, []);
  return cards.length > 0 ? (
    <div>
      <Link
        to="/"
        className="flex items-center p-5 fixed left-4 top-5 text-white text-3xl z-20"
      >
        <FontAwesomeIcon icon={faHome} className="" />
      </Link>
      <div className="container lg:px-56 bg-game-cover bg-cover h-full min-h-screen flex items-center justify-center">
        <div className="card-inner">
          <ToastContainer />
          <div className="py-5 sm:py-20 px-5 placeholder:xl:px-40 grid grid-cols-4 md:px-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-x-36 md:gap-y-12 justify-center text-center tech">
            {cards.map((card, index) => (
              <div
                className={`card ${
                  card.isRotated ? "is-flipped" : ""
                } m-h-64 text-3xl sm:text-5xl h-20 w-20 sm:h-24 sm:w-24 text-gray-800 shadow-lg   text-center cursor-pointer relative`}
                key={card.id}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className="card-front rounded-full"></div>
                  <div className="card-back flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={card.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Link
        to="/"
        className="flex items-center p-5 fixed left-4 top-5 text-white text-3xl"
      >
        <FontAwesomeIcon icon={faHome} className="" />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen bg-game-cover bg-cover min-h-screen">
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
          <h2 className="font-bold text-5xl text-white pl-5">PLAY AGAIN</h2>
        </button>
      </div>
    </div>
  );
};

export default Game;
