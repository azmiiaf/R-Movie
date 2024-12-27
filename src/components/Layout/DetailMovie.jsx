import React from 'react';
import { useParams } from 'react-router-dom';
import CardFilm from '../Fragments/CardFilm';

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
      <h1>Detail Movie</h1>
      <CardFilm
        title={movie.title}
        poster={movie.poster_path}
        runtime={movie.runtime}
        genre={movie.genres.map((genre) => genre.name).join(', ')}
      />
      <p>Sinopsis: {movie.overview}</p>
    </div>
  );
};

export default DetailMovie;