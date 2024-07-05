import { getMovies } from "app/services/movies";
import { useEffect, useState } from "react";
import { CgPentagonLeft } from "react-icons/cg";

export const useFecthMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [page, setPage] = useState<number>(1);

  const getAllMovies = async (movieName: string = "") => {
    try {
      const movies = await getMovies(movieName ? "search":"discover", movieName, page);      
      setMovies(movies);
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getAllMovies();
  }, [page]);

  return {
    movies,
    movie,
    methods: {
      getAllMovies,
      nextPage: () => { page >= 1 && setPage(e => e + 1) },      
      prevPage: () => { page !== 1 && setPage(e => e - 1) }      
    }
  };
};