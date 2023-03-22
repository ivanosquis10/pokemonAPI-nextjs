import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Layout } from '../layout/Layout'
import PokemonCardFav from '../components/PokemonCardFav'

export default function FavsPokemon() {
  const [pokemons, setPokemons] = useState([])

  // const pokemons =typeof window !== 'undefined' &&JSON.parse(localStorage.getItem('favoritos'))

  useEffect(() => {
    setPokemons(JSON.parse(localStorage.getItem('favoritos')) || [])
  }, [])

  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center mt-20 p-5">
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonCardFav key={pokemon.name} pokemon={pokemon} />
          ))}
      </div>
    </Layout>
  )
}
