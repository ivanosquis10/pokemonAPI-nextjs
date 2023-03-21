import { Layout } from '../layout/Layout'
import PokemonCard from '../components/PokemonCard'

export default function Home({ pokemonList }) {
  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center mt-20 p-5">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} index={index + 1} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
  const { results } = await response.json()

  const pokemonList = await Promise.all(
    results.map(async (result) => {
      const response = await fetch(result.url)
      const data = await response.json()

      return {
        name: data.name,
        image: data.sprites.other.dream_world.front_default,
      }
    })
  )

  return {
    props: { pokemonList },
    revalidate: 60 * 60,
  }
}
