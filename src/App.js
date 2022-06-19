import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit';
import './App.css';
import Footer from "./componenten/footer/Footer";

function App() {
    return (
        <>
        <BrowserRouter>
            <Route exact path="/">
            <Home />
          </Route>
          <Route path="/subreddit/:id">
            <Subreddit />
          </Route>
        </BrowserRouter>

            <Footer company="NOVI Hogeschool" year="2022"/>
        </>
    );
}

export default App;
