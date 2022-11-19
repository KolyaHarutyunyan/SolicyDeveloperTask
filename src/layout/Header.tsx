import "./Header.css";
import React from "react";
import Button from "../components/Button";
import ICard from "../interfaces/ICard";

interface IHeaderProps {
    onCardAdd: () => void;
    onCardsSort: () => void;
    cards: ICard[];
}

const Header: React.FC<IHeaderProps> = ({ onCardAdd, onCardsSort, cards }) => {
    return (
        <header className="header">
            <Button
                label="Add Card"
                onClick={onCardAdd}
            />
            <Button
                label="Sort Cards"
                onClick={onCardsSort}
                disabled={cards.length < 2}
            />
        </header>
    );
};

export default Header;