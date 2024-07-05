"use client"
import { useMyContext } from 'app/context/MyContext';
import { Button } from 'app/shadcn-components/components/ui/button';
import React from 'react';

const PaginatorComponent = () => {

  const { methods: { prevPage, nextPage } } = useMyContext();

  return (<>
    <div className='flex items-center justify-between lg:mx-[6rem] my-4 md:mx-4'>
      <Button onClick={ prevPage }>Prev</Button>
      <Button onClick={ nextPage }>Next</Button>
    </div>
  </>);
};

export default PaginatorComponent;