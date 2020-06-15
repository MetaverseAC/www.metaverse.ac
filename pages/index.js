import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div className="">
      <div className="mx-auto container text-gray-100 font-serif text-lg">
        <img className="mx-auto w-2/5 transition duration-1000 transform ease-in-out hover:scale-110 hover:rotate-180"
          src="/metaverse_globe.png" alt="Metaverse Globe Logo" />
        <div className="text-center font-mono text-gray-800 text-5xl">
          <div className="bg-purple-200 inline px-1 rounded-sm">
          METAVERSE
          </div>
        </div>
        <Nav/>
        <h1>
          Header
        </h1>
        <p>
          I was told I need a website - Here it is.
        </p>
      </div>
    </div>
  )
}
