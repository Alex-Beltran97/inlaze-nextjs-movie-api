interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genres: {
    id: number,
    name: string
  }[],
  overview: string,
  release_date: string;
}

interface FetchMoviesFns {
  movies: Movie[];
  movie: Movie | undefined;
  methods: {
    getAllMovies: (movieName?) => void;
    nextPage: () => void;
    prevPage: () => void;
  };
}