import Image from 'next/image'

export default function PokemonCardFav({ pokemon }) {
  
  return (
    <div className="w-full h-full mx-auto rounded-lg shadow-xl flex flex-col justify-between items-center pt-5 hover:bg-slate-800 ease-in-out duration-300 border-2">
      <div className="">
        <Image
          src={pokemon.image}
          width={200}
          height={100}
          alt={`imagen del pokemon ${pokemon.name}`}
          className="aspect-square"
        />
      </div>

      <div className="w-full flex justify-around items-center bg-slate-700 py-1">
        <h2 className="text-center px-2 text-3xl font-black text-white uppercase">
          {pokemon.name}
        </h2>
      </div>
    </div>
  )
}
