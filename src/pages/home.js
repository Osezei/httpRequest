import React from "react";
import Drinks from "../components/drinksList";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";

import "../index.css";

function Home() {
  return (
    <main>
      <Navbar />
      <SearchBar />
      <Drinks />
    </main>
  );
}

export default Home;
