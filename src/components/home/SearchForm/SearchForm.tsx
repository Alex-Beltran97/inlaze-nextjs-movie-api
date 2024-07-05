"use client"
import { useMyContext } from 'app/context/MyContext';
import { Input } from 'app/shadcn-components/components/ui/input';
import React, { FormEvent, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchFormComponent = () => {

  const inputRef = useRef(null);

  const { methods: { getAllMovies } } = useMyContext();

  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    const input = inputRef.current! as HTMLInputElement;
    const movie = input.value;
    getAllMovies(movie);
  };

  return (
    <form>
      <Input
        className='my-2 text-gray-800'
        id='movieName'
        name='movieName'
        type="text"
        placeholder={'Search movie...🔎'}
        ref={ inputRef }
        onChange={ handleChange }
      />      
    </form>
  );
};

export default SearchFormComponent;