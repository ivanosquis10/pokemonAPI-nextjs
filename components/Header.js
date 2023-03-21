import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-slate-700/50 backdrop-blur h-fit py-2">
      <navbar className="w-full px-4 text-slate-100 font-bold uppercase text-2xl">
        <Link href="/" legacyBehavior>
          Pokemon API
        </Link>
      </navbar>
    </header>
  )
}
