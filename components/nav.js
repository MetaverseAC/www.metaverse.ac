import Link from 'next/link'

const links = [
  { href: 'http://discord.metaverse.ac', label: 'Discord' },
  { href: 'https://github.com/MetaverseAC', label: 'GitHub' },
  { href: 'http://status.metaverse.ac', label: 'Status' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center items-center">
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
