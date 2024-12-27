const dataFilm = [
  {
    id: 1,
    title: "The Dark Knight",
    video: "EXeTwQWrcwY?si=trso7VeqntThhqRw",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    genre: "Action",
    description:
      "menceritakan tentang Batman (Christian Bale) yang harus menghadapi ancaman terbesar Gotham City, yaitu The Joker (Heath Ledger). The Joker adalah seorang penjahat yang tidak memiliki motif atau tujuan yang jelas, kecuali ingin menyebabkan kekacauan dan kehancuran. Sementara itu, Harvey Dent (Aaron Eckhart), seorang jaksa yang adil dan berintegritas, harus menghadapi konflik internal ketika ia dipaksa untuk memilih antara keadilan dan kejahatan.Dengan bantuan dari komisaris James Gordon (Gary Oldman) dan Lucius Fox (Morgan Freeman), Batman harus menggunakan semua kemampuan dan sumber dayanya untuk menghentikan The Joker dan menyelamatkan Gotham City dari kehancuran. Namun, The Joker memiliki rencana yang lebih besar dan lebih berbahaya, yang akan menguji batas kemampuan Batman dan membuatnya harus menghadapi konsekuensi yang mengerikan.",
    year: "2008",
    runtime: "162 min",
    rating: "9.0",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Aaron Eckhart, Gary Oldman, Morgan Freeman, meggie Gyllwnhaall",
  },
  {
    id: 2,
    title: "Spiderman",
    video: "JfVOs4VSpmA?si=NYy85uIOdtPHoz3f",
    poster:
      "https://cdn.idntimes.com/content-images/duniaku/post/20220823/spider-0e537039c7b4f79fcca65543307026ef.jpg",
    genre: "Action",
    description:
      "menceritakan tentang Peter Parker (Tom Holland) yang harus menghadapi konsekuensi dari identitasnya sebagai Spider-Man yang telah terungkap ke publik. Dengan bantuan dari Doktor Strange (Benedict Cumberbatch), Peter mencoba untuk mengembalikan identitasnya sebagai rahasia, namun hal ini malah membuka portal ke multiverse yang memungkinkan penjahat dari dimensi lain untuk masuk ke dunia Peter. Peter harus bekerja sama dengan versi lain dari dirinya sendiri untuk menghentikan penjahat-penjahat ini dan menyelamatkan dunia dari kehancuran.",
    year: "2021",
    runtime: "148 min",
    rating: "9.0",
    director: "Jhon Watts",
    actors: "Tom Holland, Zendaya, Jacob Batalon, Marisa Tomei, Benedict Cumberbatch, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong",
  },
  {
    id: 3,
    title: "Titanic",
    video: "I7c1etV7D7g?si=YQvztgx3LAZv2j2l",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    genre: "Romance",
    description:
      "menceritakan tentang kisah cinta antara Jack Dawson (Leonardo DiCaprio), seorang seniman miskin, dan Rose DeWitt Bukater (Kate Winslet), seorang wanita kaya yang terjebak dalam pernikahan yang tidak bahagia. Keduanya bertemu di atas kapal Titanic, yang dianggap sebagai kapal yang tidak bisa tenggelam, saat kapal tersebut melakukan pelayaran perdananya dari Inggris ke Amerika Serikat. Namun, nasib tidak berpihak pada mereka, karena kapal tersebut mengalami kecelakaan yang tragis dan tenggelam di tengah laut Atlantik Utara. Film ini menceritakan tentang perjuangan mereka untuk bertahan hidup dan mencari harapan di tengah-tengah bencana yang mengerikan.",
    year: "1997",
    runtime: "194 min",
    rating: "9.4",
    director: "James Cameron",
    actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Victor Garber",
  },
  {
    id: 4,
    title: "Avatar",
    video: "d9MyW72ELq0?si=7y0OT6ZH83mi5fzA",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    genre: "Action",
    description: " menceritakan tentang seorang mantan marinir AS yang lumpuh, Jake Sully (Sam Worthington), yang dikirim ke planet Pandora untuk menggantikan saudara laki-lakinya yang telah meninggal dalam program 'Avatar'. Program ini memungkinkan manusia untuk mengendalikan tubuh makhluk asing yang disebut Na'vi, yang hidup di Pandora. Jake segera menemukan dirinya terjebak dalam konflik antara manusia dan Na'vi, dan harus memilih antara kemanusiaannya dan kehidupan barunya di Pandora. Film ini menceritakan tentang perjuangan Jake untuk menyelamatkan Na'vi dan planet Pandora dari ancaman manusia.",
    year: "2009",
    runtime: "162 min",
    rating: "8.1",
    director: "James Cameron",
    actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez, Giovanni Ribisi, Joel David Moore",
  },
  {
    id: 5,
    title: "The Avengers",
    video: "eOrNdBpGMv8?si=UYEqQE2QuSC57v2q",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    genre: "Action",
    description:
      "menceritakan tentang sekelompok pahlawan super yang dipanggil oleh Nick Fury (Samuel L. Jackson), direktur S.H.I.E.L.D., untuk menyelamatkan dunia dari ancaman alien yang dipimpin oleh Loki (Tom Hiddleston). Kelompok pahlawan super ini terdiri dari Iron Man (Robert Downey Jr.), Captain America (Chris Evans), Thor (Chris Hemsworth), Hulk (Mark Ruffalo), Black Widow (Scarlett Johansson), dan Hawkeye (Jeremy Renner). Mereka harus bekerja sama untuk menghentikan Loki dan menyelamatkan dunia dari kehancuran. Film ini menceritakan tentang perjuangan mereka untuk menyelamatkan dunia dan menjadi tim yang solid.",
    year: "2012",
    runtime: "143 min",
    rating: "8.1",
    director: "Joss Whedon",
    actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston",
  },
  {
    id: 6,
    title: "Talk to Me",
    video: "aLAKJu9aJys?si=F7M3N2_48gGABBwd",
    poster:
      "https://image.tmdb.org/t/p/original/sK8Cpw6NqUFw0qVao94LcUOzlSg.jpg",
    genre: "Horror",
    description:
      " menceritakan tentang seorang remaja yang menemukan sebuah carauntuk berkomunikasi dengan orang yang sudah meninggal. Namun,ia segera menyadari bahwa cara ini memiliki konsekuensi yang mengerikan. Informasi tambahan: Film Talk to Me merupakan film horor yang diproduksi oleh Blumhouse Productions dan dirilis pada tahun 2022. Film ini telah menerima ulasan yang positif dari kritikus film, dengan banyak yang memuji atmosfer yang menakutkan dan akting yang kuat dari para aktor.",
    year: "2022",
    runtime: "97 min",
    rating: "8.9",
    director: "Mike Leigh",
    actors: "Sophie Wilde, Alexandra Jansen, Joe Bird, Otis Dhanji, Zelda Adams, Alexandra Paul",
  },
  {
    id: 7,
    title: "Jhon Wick",
    video: "l1g0fn5Nm_g?si=5JAYrqD3fRDbhQ8r",
    poster:
      "https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm731-john-wick_3e8374fc-movie-film-posteri-1000x1000h.webp",
    genre: "Action",
    description:
      "menceritakan tentang seorang mantan pembunuh bayaran, John Wick (Keanu Reeves), yang telah pensiun dan mencoba untuk hidup damai. Namun, ketika anaknya meninggal dan mobilnya dicuri oleh seorang gangster muda, Iosef Tarasov (Alfie Allen), John Wick dipaksa untuk kembali ke dunia lama dan mencari balas dendam. Ia segera menemukan dirinya terjebak dalam konflik dengan kelompok kriminal yang dipimpin oleh Viggo Tarasov (Michael Nyqvist), ayah Iosef. Film ini menceritakan tentang perjuangan John Wick untuk mencari balas dendam dan menyelamatkan dirinya dari ancaman kelompok kriminal.",
    year: "2014",
    runtime: "101 min",
    rating: "8.0",
    director: "Chad Stahelski",
    actors: "Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe, Lance Reddick, Ian McShane, Bridget Moynahan",
  },
  {
    id: 8,
    title: "Mission: Impossible - Fallout",
    video: "XiHiW4N7-bo?si=8PDgOx2pKT1lPiXR",
    poster:
      "https://thumbor.prod.vidiocdn.com/lk6kbgb7R5BdQ6sm0QMHTvjWW4s=/filters:quality(70)/vidio-media-production/uploads/image/source/13471/4fa90d.jpg",
    genre: "Action",
    description:
      "menceritakan tentang Ethan Hunt (Tom Cruise), seorang agen CIA yang telah menyelesaikan misi yang sulit. Namun, setelah misi tersebut, Ethan menemukan dirinya terjebak dalam konflik yang lebih besar. Ia harus menghadapi ancaman dari seorang pemilik rumah pembunuh, Ilsa Faust (Rebecca Ferguson), yang ingin menghancurkan dunia. Ethan harus bekerja sama dengan sekelompok agen lain yang juga terjebak dalam konflik, termasuk Ilsa. Film ini menceritakan tentang perjuangan Ethan untuk menyelamatkan dunia dari ancaman Ilsa dan menyelesaikan misi yang sulit.",
    year: "2018",
    runtime: "129 min",
    rating: "9.0",
    director: "Christopher McQuarrie",
    actors: "Tom Cruise, Rebecca Ferguson, Ving Rhames, Simon Pegg, Michelle Yeoh, Sean Harris, Alec Baldwin",
  },
  {
    id: 9,
    title: "A Quiet Place",
    video: "WR7cc5t7tv8?si=n3Xb1Tfp6T09y4BX",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCkbc7QoKHd7q-wBb2SBWkG4dVdY2u0tBVA&s",
    genre: "Horror",
    description:
      "menceritakan tentang sebuah keluarga yang harus hidup dalam diam karena adanya makhluk yang memburu mereka berdasarkan suara. Mereka harus berjalan dengan hati-hati dan tidak membuat suara apapun untuk menghindari makhluk tersebut. Film ini menceritakan tentang perjuangan keluarga tersebut untuk bertahan hidup dan menemukan cara untuk mengalahkan makhluk tersebut. Film ini juga mengeksplorasi tema tentang keluarga, cinta, dan pengorbanan.",
    year: "2018",
    runtime: "90 min",
    rating: "9.5",
    director: "John Krasinski",
    actors: "Emily Blunt, John Krasinski, Millicent Simmonds, Noah Jupe",
  },
  {
    id: 10,
    title: "Strangers Things",
    video: "b9EkMc79ZSU?si=JV5H-IUngi0od48r",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBh14k4ZPt8rb0ao80zI7u-b2f65rPCYRQg&s",
    genre: "Horror",
    description:
      " menceritakan tentang seorang anak laki-laki bernama Will Byers yang menghilang secara misterius di kota Hawkins, Indiana. Ibu Will, Joyce Byers, dan kepala polisi Jim Hopper mulai mencari Will dan menemukan bahwa ia telah diculik oleh sebuah makhluk supernatural dari dimensi lain. Sementara itu, seorang anak perempuan bernama Eleven yang memiliki kemampuan telekinetik dan telepati mulai membantu teman-teman Will untuk mencari dan menyelamatkannya. Serial ini menceritakan tentang perjuangan mereka untuk menghadapi makhluk supernatural dan menyelamatkan Will, serta mengeksplorasi tema tentang persahabatan, cinta, dan pengorbanan.",
    year: "2016",
    runtime: "128 min",
    rating: "8.1",
    director: "The Duffer Brothers",
    actors: "Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo, Caleb McLaughlin, Sadie Sink",
  },
  {
    id: 11,
    title: "Texas Chainsaw Massacre",
    video: "zcI6SFiK_yk?si=7yv0oGMSLUCeTAqJ",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnpeVzQstCRjeAgfJDKeVCEOc3y-sNXuu1Q&s",
    genre: "Horror",
    description:
      "menceritakan tentang sekelompok anak muda yang melakukan perjalanan ke Texas untuk mengunjungi kakek mereka yang baru saja meninggal. Mereka mengalami kecelakaan di jalan dan terpaksa harus menginap di sebuah rumah yang terletak di tengah hutan. Namun, mereka tidak menyadari bahwa rumah tersebut ditempati oleh keluarga Leatherface, seorang keluarga yang melakukan pembunuhan massal dengan menggunakan mesin penggiling daging. Film ini menceritakan tentang perjuangan mereka untuk bertahan hidup dan menghindari pembunuhan oleh Leatherface dan keluarganya. Film ini dianggap sebagai salah satu film horor paling menakutkan dan berpengaruh dalam sejarah perfilman.",
    year: "1974",
    runtime: "83 min",
    rating: "7.3",
    director: "Tobe Hooper",
    actors: "Gunnar Hansen, Marilyn Burns, Edwin Pickens, Allen Danzig, Paul A. Partain, Teri McMinn, Jim Siedow",
  },
  {
    id: 12,
    title: "Psycho",
    video: "BwVKSGu8wEA?si=mfbUfNPjDf549YE4",
    poster:
      "https://cdn.posteritati.com/posters/000/000/061/367/psycho-md-web.jpg",
    genre: "Horror",
    description:
      " menceritakan tentang seorang wanita bernama Marion Crane (Janet Leigh) yang mencuri uang dari kantornya dan melarikan diri ke sebuah motel yang terletak di tengah jalan. Namun, ia tidak menyadari bahwa motel tersebut ditempati oleh seorang pemilik motel yang bernama Norman Bates (Anthony Perkins), yang memiliki ibu yang sangat dominan dan memiliki kebiasaan yang aneh. Ketika Marion tiba di motel, ia mulai merasa tidak nyaman dan mencoba untuk meninggalkan motel tersebut. Namun, ia tidak berhasil dan akhirnya dibunuh oleh Norman. Film ini menceritakan tentang perjuangan saudara laki-laki Marion, Lila (Vera Miles), dan pacarnya, Sam (John Gavin), untuk mencari Marion dan mengungkap kebenaran tentang kematian Marion. Film ini dianggap sebagai salah satu film horor paling menakutkan dan berpengaruh dalam sejarah perfilman.",
    year: "1960",
    runtime: "109 min",
    rating: "7.3",
    director: " Alfred Hitchcock",
    actors: "Anthony Perkins, Janet Leigh, Vera Miles, John Gavin, Martin Balsam",
  },
  {
    id: 13,
    title: "La La Land",
    video: "0pdqf4P9MB8?si=XJxAWDe2y9ztjfOD",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2IZRoVTdv43mMR5tFr6o2AtRpe-N3Q_HTBKYS2RGn8BjhS8cIDSJQ8Oh1m2Q78Tg9h8&usqp=CAU",
    genre: "Romance",
    description:
      " menceritakan tentang seorang musisi jazz bernama Sebastian (Ryan Gosling) yang ingin membuka sebuah klub jazz sendiri. Ia bertemu dengan seorang aktris bernama Mia (Emma Stone) yang ingin menjadi bintang film. Keduanya jatuh cinta dan mulai menjalani hubungan yang romantis. Namun, mereka harus menghadapi tantangan dan keputusan yang sulit untuk mencapai impian mereka. Film ini menceritakan tentang perjuangan mereka untuk mencapai impian dan menemukan cinta sejati. Film ini juga menampilkan beberapa lagu yang indah dan koreografi yang menakjubkan.Penghargaan: Film 'La La Land' memenangkan beberapa penghargaan, termasuk 6 Academy Award, 7 Golden Globe Award, dan 5 BAFTA Award.",
    year: "2016",
    runtime: "128 min",
    rating: "7.3",
    director: "Damien Chazelle",
    actors: "Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt, J.K. Simmons",
  },
  {
    id: 14,
    title: "The Shape of Water",
    video: "XFYWazblaUA?si=PEa29vp13lh7Tm7r",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xviBlDBK6R8AVdxudKhyl5vXpVyvIViX8A&s",
    genre: "Romance",
    description:
      "menceritakan tentang seorang wanita bisu bernama Elisa Esposito (Sally Hawkins) yang bekerja sebagai pembersih di sebuah laboratorium rahasia. Ia menemukan sebuah makhluk air yang aneh dan menarik, yang dikenal sebagai 'The Asset' (Doug Jones). Elisa mulai menjalin hubungan dengan makhluk tersebut dan mencoba untuk menyelamatkannya dari tangan ilmuwan yang jahat, Richard Strickland (Michael Shannon). Film ini menceritakan tentang perjuangan Elisa untuk menyelamatkan makhluk tersebut dan menemukan cinta sejati. Penghargaan: Film 'The Shape of Water' memenangkan beberapa penghargaan, termasuk 4 Academy Award, 3 Golden Globe Award, dan 3 BAFTA Award.",
    year: "2017",
    runtime: "123 min",
    rating: "9.7",
    director: "Guillermo del Toro",
    actors: "Sally Hawkins, Michael Shannon, Richard Jenkins, Octavia Spencer, Doug Jones",
  },
];

export { dataFilm };
