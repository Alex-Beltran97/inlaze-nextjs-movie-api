import instance from "../http";

const baseUrl = "http://localhost:3000/api";
const path = "/movies";
const images_path = "https://image.tmdb.org/t/p/original";

export const getMovies = async (type: string, query: string = "", page: number = 1) => {
  const response = await instance(baseUrl).get<Movie[]>(`/${ type }${ path }?query=${ query }&page=${page}`) || [];
  const movies: Movie[] = response.data || [];
  return movies.map(movie => ({
    ...movie,
    poster_path: `${images_path}/${ movie.poster_path }`
  }));
};

export const getMovie = async (id: string = "") => {
  
  const response = await instance(baseUrl).get<Movie>(`${ path }/${ id }`);
  const movie: Movie = response.data;
  
  return {
    ...movie,
    poster_path: `${images_path}/${ movie.poster_path }`
  };
};