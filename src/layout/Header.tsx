import "./Header.css";
import React from "react";
import Button from "../components/Button";

interface IHeaderProps {
    onCardAdd: () => void;
    onCardsSort: () => void;
    sortable: boolean;
}

const Header: React.FC<IHeaderProps> = ({ onCardAdd, onCardsSort, sortable }) => {
    return (
        <header className="header">
            <Button
                label="Add Card"
                onClick={onCardAdd}
            />
            <Button
                label="Sort Cards"
                onClick={onCardsSort}
                disabled={!sortable}
            />
        </header>
    );
};

export default Header;