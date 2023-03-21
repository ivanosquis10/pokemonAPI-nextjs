import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Proyecto pokemon, api pokemon, ve tus pokemons favoritos e interactua"
        />
      </Head>
      <body className="bg-gradient-to-r from-slate-900 to-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
