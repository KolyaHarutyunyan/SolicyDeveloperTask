import "./Card.css";
import React from "react";
import ICard from "../interfaces/ICard";
import Button from "./Button";

interface ICardProps {
  card: ICard;
  onCardRemove: (cardId: string) => void;
}

const Card: React.FC<ICardProps> = ({ card, onCardRemove }) => {
  return (
    <div className="card">
      <Button
        label={"x"}
        className={"remove-button"}
        onClick={() => onCardRemove(card.id)}
      />
      <span className="card-number">{card.uNumber}</span>
    </div>
  );
};

export default Card;