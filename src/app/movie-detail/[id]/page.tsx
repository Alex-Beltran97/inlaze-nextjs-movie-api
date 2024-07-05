import { getMovie } from 'app/services/movies';
import { Button } from 'app/shadcn-components/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'app/shadcn-components/components/ui/card';
import { formatDate } from 'app/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
  params: {
    id: string
  }  
};

const MovieDetailPage = async ({ params: { id } }: Props) => {
  const movie = await getMovie(id);

  const { id: movieId, title, poster_path, genres, overview, release_date } = movie;
  
  return (<main className='container w-full min-h-screen'>
    <Card className='m-4'>
      <CardHeader>
        <CardTitle className='font-weight: 600 text-center text-xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='container grid md:grid-cols-2 mt-4'>
        <figure className='w-6/12 mx-auto shadow-lg'>
          <img
            src={ poster_path }
            alt={title}          
          />        
        </figure>
        <div>        
          <div className='container p-2'>
            <p className='my-2'><b>Genres:</b> { genres.map((item: any) => item.name).join(" - ") }</p>
            <hr />
            <p className='my-2'><b>Release date:</b> { formatDate(release_date) }</p>
            <hr />
            <p className='my-2'><b>Overview:</b> { overview }</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <div className='flex items-center md:justify-end max-sm:justify-evenly gap-2'>
      <Button>Add to Favorites 🌠</Button>
      <Button>
        <Link href="/">return</Link>
      </Button>
    </div>
  </main>);
};

export default MovieDetailPage;