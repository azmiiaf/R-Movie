import { useState } from "react";
import MovieContent from "../Fragments/MovieContent";
import RecommendMovie from "../Fragments/RecommendMovie";
import TrendContent from "../Fragments/TrendContent";
import { Link } from "react-router-dom";
import Video from "../Fragments/Video";


const ContentMovies = (props) => {
  const { dataFilm, showGenre,getGenre, genreMovie } = props;
  const [removeVideo, setRemoveVideo] = useState('');
 

  


  const backHandle = () => {
    const overlay = document.querySelector('.overlay-detail-movie')
    overlay.classList.toggle('overlay-block')
    document.querySelector('body')
    .style.overflow='auto';
    
    
    const video = document.querySelector('.video-content')
    

    
    
    
        
    
  }

  return (
    <div className="content-movies">
      <div className="content-movies-container">
        <TrendContent dataFilm={dataFilm} />
        <RecommendMovie
          partContent="Rekomendasi"
          dataFilm={dataFilm}
          showGenre={showGenre}
          genreMovie={genreMovie}
          getGenre={getGenre}
        />
        <MovieContent
          partContent="Movies"
          dataFilm={dataFilm}
          showGenre={showGenre}
          getGenre={getGenre}
        />
        <span className="overlay-detail-movie">
          <div className="overlay-container">
            <header className="header">
              <div onClick={() => backHandle()} className="back-btn">
                <img src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000" alt="" />
              </div>
              <h1>R-Movie</h1>
            </header>
            <section className="overlay-content">
              <div className="overlay-title">
                <h2>{getGenre.title}</h2>
                <p>{`${getGenre.runtime} | ${getGenre.rating}`}</p>
              </div>
              <Video videoId={getGenre.video} getGenre={getGenre}/>
              <div className="overlay-desc">
                <div className="director">
                  <p>Director:</p>
                  <h4 className="overlay-director">{getGenre.director}</h4>
                </div>
                <div className="actors">
                  <p>Actors:</p>
                  <h5 className="overlay-actors">{getGenre.actors}</h5>
                </div>
                <div className="overlay-description">
                  <p className="description">Deskripsi</p>
                  <p>{getGenre.description}</p>
                </div>
              </div>
            </section>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ContentMovies;
