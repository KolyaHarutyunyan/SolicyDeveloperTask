import "./App.css";
import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import SideBar from "./layout/SideBar";
import useLocalStorage from "./hooks/useLocalStorage";
import ICard from "./interfaces/ICard";
import { getRandomNumber } from "./utilities/getRandomNumber";
import { createUniqueId } from "./utilities/createUniqueId";


const App = () => {
  const [cards, setCards] = useLocalStorage<ICard[]>("cards", []);
  
  const addCardHandler = () => {
    const newCard = {
      id: createUniqueId(),
      uNumber: getRandomNumber(1000)
    };
    setCards((pS: ICard[]) => [...pS, newCard]);
  };

  const sortCardsHandler = () => {
    const sortedCards = cards.sort((a: ICard, b: ICard) => a.uNumber - b.uNumber);
    setCards([...sortedCards]);
  };

  const removeCardHandler = (cardId: string) => {
    setCards(cards.filter((item: ICard) => item.id !== cardId));
  };

  return (
    <div className="app">
      <div className="container">
        <Header 
          onCardAdd={addCardHandler}
          onCardsSort={sortCardsHandler}
          sortable={cards.length >= 2}
        />
        <Main 
          cards={cards}
          onCardRemove={removeCardHandler}
        />
        <Footer />
      </div>
      <SideBar />
    </div>
  );
};

export default App;
