import Video from "./Video";

const TrendContent = (props) => {
  const { dataFilm } = props;

  const getId = dataFilm[5];

  const backHandle = (event) => {
    const overlay = document.querySelector(".overlay-trend-detail");
    overlay.classList.toggle("overlay-block");
    document.querySelector("body").style.overflow = "auto";

    const video = document.querySelector(".video-content");
    video.src = "";

    
  };

  

  const showDetailTrend = () => {
    const overlay = document.querySelector(".overlay-trend-detail");
    overlay.classList.toggle("overlay-block");
    document.querySelector("body").style.overflow = "hidden";

    const urlVideo = "aLAKJu9aJys?si=F7M3N2_48gGABBwd"
    const video = document.querySelector(".video-content");
    video.src = `https://www.youtube.com/embed/${urlVideo}`
  };

  return (
    <div className="trend-content">
      <img
        className="img-poster"
        src="trendPic.png"
        alt="Talk To Me"
      />
      <span className="overlay-trend-content">
        <div>
          <h1>TRENDING</h1>
          <h2>Talk To Me</h2>
        </div>
        <button className="button-trend-content" onClick={showDetailTrend}>
          Lihat Detail
        </button>
      </span>
      <span className="overlay-trend-detail">
        <div className="overlay-trend-container">
          <header className="header">
            <div className="back-btn" onClick={() => backHandle()}>
              <img src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000" alt="" />
            </div>
            <h1>R-Movie</h1>
          </header>
          <section className="overlay-trend-detail-content">
            <div className="overlay-trend-title">
              <h2>Talk To Me</h2>
              <p>{`97 min | 8.9`}</p>
            </div>
            <Video videoId="aLAKJu9aJys?si=F7M3N2_48gGABBwd" className="video" />
            <div className="overlay-desc">
              <div className="director">
                <p>Director:</p>
                <h4 className="overlay-director">Mike Leigh</h4>
              </div>
              <div className="actors">
                <p>Actors:</p>
                <h5 className="overlay-trend-actors">
                  Sophie Wilde, Alexandra Jansen, Joe Bird, Otis Dhanji, Zelda
                  Adams, Alexandra Paul
                </h5>
              </div>
              <div className="overlay-description">
                <p className="description">Deskripsi</p>
                <p>
                  menceritakan tentang seorang remaja yang menemukan sebuah cara
                  untuk berkomunikasi dengan orang yang sudah meninggal. Namun,
                  ia segera menyadari bahwa cara ini memiliki konsekuensi yang
                  mengerikan. Informasi tambahan: Film Talk to Me merupakan
                  film horor yang diproduksi oleh Blumhouse Productions dan
                  dirilis pada tahun 2022. Film ini telah menerima ulasan yang
                  positif dari kritikus film, dengan banyak yang memuji atmosfer
                  yang menakutkan dan akting yang kuat dari para aktor.
                </p>
              </div>
            </div>
          </section>
        </div>
      </span>
    </div>
  );
};

export default TrendContent;
