import { useRef } from "react";
import Header from "../components/Fragments/Header.jsx";
import TrendContent from "../components/Fragments/TrendContent.jsx";
import ContentMovies from "../components/Layout/ContentMovies.jsx";
import "../components/style/App.css";
import { dataFilm } from "../components/utils/datadataan.js";
import { useState } from "react";

function App() {
  const [dataMovie, setDataMovie] = useState(dataFilm);
  const [search, setSearch] = useState("");
  const [getGenre, setGetGenre] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);

  const onSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredMovies = [];
  
    // menggunakan algoritma Linear Search
    for (let i = 0; i < dataFilm.length; i++) {
      if (dataFilm[i].title.toLowerCase().includes(searchValue)) {
        filteredMovies.push(dataFilm[i]);
      }
    }
  
    setDataMovie(filteredMovies);
  };

  const showGenre = (event) => {
    const genre = dataMovie.find((item) => item.id === event.id);

    setGetGenre(genre);

    const overlay = document.querySelector(".overlay-detail-movie");
    overlay.classList.toggle("overlay-block");
    document.querySelector("body").style.overflow = "hidden";

    
  };

  return (
    <>
      <Header dataFilm={dataMovie} onSearch={onSearch} search={search} />
      <ContentMovies
        dataFilm={dataMovie}
        showGenre={showGenre}
        genreMovie={genreMovie}
        getGenre={getGenre}
      />
    </>
  );
}

export default App;
