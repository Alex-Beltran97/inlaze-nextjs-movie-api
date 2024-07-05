"use client"
import SearchFormComponent from 'app/components/home/SearchForm/SearchForm';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsSearch  } from "react-icons/bs";

export const Header = () => {
  const [toSearch, setToSearch] = useState<boolean>(false);

  const handleSearch = () => setToSearch((e:boolean)=>!e);

  return (<header className="bg-gray-800 text-white">
    <div className='flex items-center p-2'>
      <Link href="/">
        <img className='w-14' src="/images/logo.svg" alt="logo" />
      </Link>
      <div className='container my-2'>
        <h1 className='text-center'>MoBee</h1>
        <p className='text-center text-yellow-400'>Movies feel like pollen</p>
      </div>
      <BsSearch onClick={handleSearch} />
    </div>
    {toSearch && <SearchFormComponent />}
    <hr />
  </header>
  );
};