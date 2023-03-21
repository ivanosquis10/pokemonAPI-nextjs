import Image from 'next/image'
import { Layout } from '../../layout/Layout'

export default function Pokemon({ pokeData }) {
  const img = pokeData.sprites.other.dream_world.front_default
  return (
    <Layout>
      <section className="w-full lg:w-9/12 mx-auto px-2">
        <div className="mt-20 bg-gray-800 p-4 rounded-lg shadow hover:shadow-xl transition-all w-full grid-cols-1 md:grid grid-cols-2">
          <div className="flex justify-center mb-2">
            <Image
              src={img}
              alt={`imagen del pokemon ${pokeData.name}`}
              className="bg-slate-900 rounded-md aspect-square p-5"
              width={400}
              height={400}
            />
          </div>
          <div className=" p-1 lg:p-5 flex flex-col gap-2 rounded-md ">
            <h1 className="uppercase font-bold text-4xl lg:text-5xl text-gray-100 lg:border-b">
              {pokeData.name}
            </h1>
            {/* info del pokemon */}
            <div className="mt-2 lg:mt-4 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl lg:text-3xl font-bold text-gray-300">
                  Información del Pokemon
                </h3>
                <p className="text-xl lg:text-2xl  font-medium text-gray-400">
                  Tamaño:{' '}
                  <span className="font-bold text-slate-200">{`${pokeData.height} centimetros`}</span>
                </p>
                <p className="text-xl lg:text-2xl font-medium text-gray-400">
                  Peso:{' '}
                  <span className="font-bold text-slate-200">{`${pokeData.weight} kilogramos`}</span>
                </p>
              </div>

              <div className="mt-5 lg:mt-10">
                <h3 className="text-xl lg:text-2xl font-bold uppercase text-gray-400">
                  Tipo de Pokemon
                </h3>
                <ul className="">
                  {pokeData.types.map((tipo) => (
                    <li
                      className="text-xl lg:text-2xl font-medium font-bold uppercase text-gray-200"
                      key={tipo.slot}
                    >
                      {tipo.type.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const url = query.url
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)
  const pokeData = await res.json()

  return {
    props: { pokeData },
  }
}
