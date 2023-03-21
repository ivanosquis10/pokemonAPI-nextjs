import Image from 'next/image'
import Link from 'next/link'

export default function PokemonCard({ pokemon, index }) {
  const { image, name } = pokemon

  return (
    <div className=" w-full h-full mx-auto rounded-lg shadow-xl flex flex-col justify-between items-center pt-5 hover:bg-slate-800 ease-in-out duration-300 border-2">
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

      <div className="w-full  bg-slate-700 py-1">
        <h2 className="text-center px-2 text-3xl font-black text-white uppercase">
          {name}
        </h2>
      </div>
    </div>
  )
}
