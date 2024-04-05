// // component to display Data called DisplayData
// const DisplayData = () =>{
//   const data = [
// {
//   id: 0,
//   language: 'JavaScript',
//   description: 'Software Engineering',
// },
// {
//   id: 1,
//   language: 'Python',
//   description: 'Data science',
// },
// {
//   id: 2,
//   language: 'Kotlin',
//   description: 'Android Development',
// },










//   ];
//   return (
//     <>
//     {data.map((item) => {
//   return (
//     <div key={item.id}>
//       {/* <div>{item.language}</div> */}
//       <div>{item.description}</div>
//     </div>
//   )} )}
//   </>
//   );
// }

// export default DisplayData;

import React, { useState, useEffect } from 'react';
const RickAndMorty = () => {
  //useState hook to store the data from the API (Default is an empty list)
  const [characters, setCharacters] = useState([])

  //Async function to fetch data from the API
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    //Sets the data from the API to the characters state
    setCharacters(data.results)
  }

  //useEffect hook to fetch data from the API when the component is mounted
  useEffect(() => {
    fetchCharacters()
    //Dependancy array is empty, so the useEffect hook will only run once when the component is mounted
  }, [])
  return (
    <div>
      {/**The data is mapped through and information will be displayed on the UI */}
      {characters.map((character) => (
        <div key={character.id}>
          <div>{character.name}</div>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}
export default RickAndMorty;