import React, { useState, useEffect } from 'react';

const RekomendasiFilm = () => {
  const [judulFilm, setJudulFilm] = useState('');
  const [rekomendasiFilm, setRekomendasiFilm] = useState([]);

  const handleJudulFilmChange = (e) => {
    setJudulFilm(e.target.value);
  };

  const handleRekomendasiFilm = () => {
    // Fungsi untuk merekomendasikan film
    const rekomendasi = [];
    // TODO: Implementasikan algoritma Content-Based Filtering
    setRekomendasiFilm(rekomendasi);
  };

  return (
    <div>
      <h1>Rekomendasi Film</h1>
      <form>
        <label>
          Judul Film:
          <input type="text" value={judulFilm} onChange={handleJudulFilmChange} />
        </label>
        <button type="button" onClick={handleRekomendasiFilm}>
          Rekomendasikan
        </button>
      </form>
      <ul>
        {rekomendasiFilm.map((film) => (
          <li key={film.judul}>{film.judul} ({film.genre})</li>
        ))}
      </ul>
    </div>
  );
};

export default RekomendasiFilm;