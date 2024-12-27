import { useState } from "react";
import CardFilm from "./CardFilm";

const MovieContent = (props) => {
  const { partContent, dataFilm, showGenre, getGenre } = props;
  const [dataGenre, setDataGenre] = useState(getGenre);

  return (
    <>
      <div className="content-movie-list">
        <h3>{partContent}</h3>
        {dataFilm.map((item) => {
          return (
            <CardFilm
              key={item.id}
              title={item.title}
              poster={item.poster}
              runtime={item.runtime}
              genre={item.genre}
              onclick={() => showGenre(item)}
            ></CardFilm>
          );
        })}
      </div>
    </>
  );
};

export default MovieContent;
