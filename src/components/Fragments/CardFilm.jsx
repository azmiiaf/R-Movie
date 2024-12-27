const CardFilm = (props) => {
  const { title, poster, runtime, genre, onclick = () => {} } = props;
  return (
    <div onClick={onclick} className="card-film">
      <div className="img">
        <img src={poster} alt="" />
      </div>
      <div className="overlay">
        <h1>{title}</h1>
        <div className="info">
          <p className="runtime">{runtime}</p>
          <p>{genre}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
