import { data } from "autoprefixer";
import CardFilm from "./CardFilm";
import { useState } from "react";

const RecommendMovie = (props) => {
  const { getGenre, partContent, showGenre, dataFilm } = props;
  const [movie, setMovie] = useState(getGenre);
  
  /* 
  menggunakan algoritma Content-Based Filtering yang telah disederhanakan 
  menggunakan method bawaan dari javascript. 
  */
  const mov = dataFilm.filter(item => item.id !== getGenre.id && item.genre === getGenre.genre);
  
  return (
    <>
      <div className="content-movie-list recommend">
        <h3>{partContent}</h3>
        {(mov.length === 0) ? (
          <p className="no-recommend">belum ada Rekomendasi</p>
         
          ) : (
            mov.map((item) => {
              return (
                <CardFilm
                  key={item.id}
                  title={item.title}
                  poster={item.poster}
                  runtime={item.runtime}
                  genre={item.genre}
                  onclick={() => showGenre(item)}
                />
              );
            })
            )
        }
      </div>
    </>
  );
};

export default RecommendMovie;
