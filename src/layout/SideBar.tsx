import "./SideBar.css";
import React from "react";
import Instructions from "../components/Instructions";

const SideBar = () => {
    return (
        <div className="sideBar">
            <Instructions />
        </div>
    );
};

export default SideBar;