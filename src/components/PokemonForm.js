import React, {useState} from 'react'

const PokemonForm = ({search}) => {
    const INITIAL_STATE = ''
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {value} = e.target
        setFormData(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        search(formData)
        setFormData(INITIAL_STATE)
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="pokemon-name">Search a Pokemon</label>
            <div>
            <input
            id="pokemon-name"
            placeholder="Search the Pokedex"
            name="pokemon"
            value={formData}
            onChange={handleChange}
            />
            </div>
            <button>Search</button>
        </form>
        </>
    )
}

export default PokemonForm