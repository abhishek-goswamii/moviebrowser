import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";

// tmdb 12ed4b3b380c8c0c6883b50e36180add
// tmdb new  https://api.themoviedb.org/3/search/movie?api_key=12ed4b3b380c8c0c6883b50e36180add&language=en-US&query=star%20wars&page=1&include_adult=false

function App() {

  const [searchResult, setSearchResult] = useState([]);

  const [searchText, setSearchText] = useState("xyz");

  useEffect(() => {

    if(searchText){

      console.log(searchText, " is search text");

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=12ed4b3b380c8c0c6883b50e36180add&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setSearchResult(data.results);
      })
    }
    

  }, [searchText]);

  return (
    <div>
      
      <Navbar searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResult={searchResult} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
