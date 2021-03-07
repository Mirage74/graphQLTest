// Core
import React from 'react';

// Hooks
import { useQueryAllAvailablePets } from './hooks/useQueryAllAvailablePets';

export const SpecialList = () => {
  const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets();
//console.log("petssss ", pets)
  const loaderJSX = loading && (
    <p>Loading...</p>
  );

  const errorJSX = error && (
    <p>
      We have a problem: {error.message}
    </p>
  );

  const petsJSX = pets && pets.map(({id, name, weight}) => (
    <p key={id}>
      <span>Name: {name}</span>
      <span>Weight: {weight}</span>
    </p>
  ));

  const forRender = loaderJSX || errorJSX || petsJSX

  // {loaderJSX}
  // {errorJSX}
  // {petsJSX}

  return (
    <>
      <button onClick={getAllAvailablePets}>Download</button>
      {forRender}
    </>
  )
};
