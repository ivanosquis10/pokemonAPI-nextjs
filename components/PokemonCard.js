import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PokemonCard({ pokemon, index }) {
  const { image, name } = pokemon
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('favoritos')) {
      localStorage.setItem('favoritos', JSON.stringify([]))
    }
  }, [])

  // validamos que no se duplique la informacion y la agregamos
  const agregarFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos'))
    if (!favoritos.find((p) => p.name === pokemon.name)) {
      const nuevoFav = [...favoritos, pokemon]
      localStorage.setItem('favoritos', JSON.stringify(nuevoFav))
      return alert('agregado a favoritos')
    }

    alert('ya esta agregado a favoritos')
  }

  return (
    <div className="w-full h-full mx-auto rounded-lg shadow-xl flex flex-col justify-between items-center pt-5 hover:bg-slate-800 ease-in-out duration-300 border-2">
      <div className="">
        <Link href={`/pokemon/${index}`} legacyBehavior>
          <Image
            src={image}
            width={200}
            height={100}
            alt={`imagen del pokemon ${name}`}
            className="aspect-square"
          />
        </Link>
      </div>

      <div className="w-full flex justify-between items-center bg-slate-700 p-1">
        <h2 className="text-center px-2 text-2xl font-black text-white uppercase">
          {name}
        </h2>
        <button
          className="p-1 font-bold bg-red-700 text-white uppercase rounded-md"
          onClick={() => agregarFavorito()}
        >
          fav
        </button>
      </div>
    </div>
  )
}
