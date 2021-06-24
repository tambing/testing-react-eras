import React from "react";
// import Home from "../Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import Landing from "../Landing";
import Profile from "../Profile";
import Education from "../Education";
import Portofolio from "../Portofolio";
import Other from "../Other";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Landing />
            <Profile />
            <Education />
            <Portofolio />
            <Other />
        </BrowserRouter>
        
    );
};

export default App;