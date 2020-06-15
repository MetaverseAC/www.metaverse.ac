import Link from 'next/link'

const links = [
  { href: 'http://discord.metaverse.ac', label: 'Discord' },
  { href: 'https://github.com/MetaverseAC', label: 'GitHub' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center items-center">
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="text-yellow-500 text-xl capitalize border-b border-yellow-300 hover:text-gray-100 hover:border-opacity-0">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
