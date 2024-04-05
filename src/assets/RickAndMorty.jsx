import React,{useState,useEffect}from'react';
const RickAndMorty =() => {
     const [characters, setcharacters]= useState([])

const fetchCharacters = async () =>{
    const response = await
    fetch ("https://rickandmortyapi.com/api/character")
    const data = await response.json()
}
useEffect (()=>{
    fetchCharacters ()
},[])
return (
    <div>
        {characters.map((characters)=>{
            <div key={characters.id}>
            <div>{characters.name}</div>
            <img src={characters.image} alt={characters.name}/>  
            </div>  
        })}
    </div>
)
    }   
    export default RickAndMorty;