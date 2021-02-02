import React, {useState, useEffect} from 'react'
import PokemonForm from './PokemonForm'

const baseURL = 'https://pokeapi.co/api/v2/pokemon'

const Pokemons = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonAPI, setPokemonAPI] = useState(baseURL)

    return (
        <div>
        <PokemonForm/>
        </div>
    )
}

export default Pokemons