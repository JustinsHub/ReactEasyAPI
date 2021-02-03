import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonForm from './PokemonForm'
import Pokemon from './Pokemon'


const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
const INITIAL_STATE = [];

const Pokemons = () => {
    const [pokemonData, setPokemonData] = useState(INITIAL_STATE)
    const [pokemonAPI, setPokemonAPI] = useState(baseURL)

    const search = (pokemon) => {
        setPokemonAPI(`${baseURL}/${pokemon}`)
        console.log(pokemonAPI)
    }

    useEffect(()=>{
        const foundPokemon = async() => {
            const res = await axios.get(pokemonAPI)
            setPokemonData(res.data.name)
            console.log(res)
        }
        foundPokemon();
    }, [pokemonAPI])

    return (
        <div>
        <PokemonForm search={search}/>
        <Pokemon name={pokemonData}/>
        {/* {pokemonData.map(p => {return(<Pokemon name={p}/>)})} */}
        </div>
    )
}

export default Pokemons