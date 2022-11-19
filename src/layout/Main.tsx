import "./Main.css";
import React from "react";
import Card from "../components/Card";
import ICard from "../interfaces/ICard";

interface IMainProps {
    cards: ICard[];
    onCardRemove: (cardId: string) => void;
}

const Main: React.FC<IMainProps> = ({ cards, onCardRemove }) => {
    return (
        <main className="main">
            <div className="cards-box">
                {cards.map(item => (
                    <Card
                        key={item.id}
                        card={item}
                        onCardRemove={onCardRemove}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;