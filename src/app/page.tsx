"use client"
import PaginatorComponent from 'app/components/home/Paginator/Paginator';
import { useMyContext } from 'app/context/MyContext';
import { useRouter } from 'next/navigation';
import React from 'react';

const MyPage = () => {
  const rounter = useRouter();

  const { movies } = useMyContext();

  const goToMovieDetail = (id: number = 0) => {
    rounter.push("/movie-detail/"+id);
  }

  return (<> 
    { movies.length !== 0 && <PaginatorComponent />}
    <div className='
      container
      mx-auto
      grid
      max-sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-2
      px-2
      content-center
      '      
    >
      { movies?.map((movie: Movie) => (
        <div className='mb-4 cursor-pointer' key={movie.id}>
          <img
            onClick={ () => goToMovieDetail(movie.id) }
            className='border hover:border-yellow-500'
            src={ movie.poster_path }
            alt={ movie.title }
            width={250}          
          />
          <h4>{ movie.title }</h4>
        </div>
      )) }
    </div>
    { movies.length !== 0 && <PaginatorComponent />}
  </> 
  );
};

export default MyPage;