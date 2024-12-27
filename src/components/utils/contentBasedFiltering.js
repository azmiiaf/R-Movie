const contentBasedFiltering = (filmData, judulFilm) => {
    const rekomendasi = [];
    const film = filmData.find((film) => film.judul === judulFilm);
    if (film) {
      const genre = film.genre;
      const direktur = film.direktur;
      const aktor = film.aktor;
      const deskripsi = film.deskripsi;
      const rekomendasiFilm = filmData.filter
    }
}