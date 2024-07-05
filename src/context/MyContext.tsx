"use client";

import { useFecthMovies } from 'app/app/hooks';
import React, { useContext, createContext } from 'react';

interface Props {
  children: React.ReactNode
}

const MyContext = createContext<FetchMoviesFns | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) throw new Error("The context must be whitin a provider");
  return context;
}

const ContextProvider = ({ children }: Props) => {

  const fetchMoviesFns = useFecthMovies();

  return (<>
    <MyContext.Provider value={ fetchMoviesFns }>
      { children }
    </MyContext.Provider>
  </>);
};

export default ContextProvider;