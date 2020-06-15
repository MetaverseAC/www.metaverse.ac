import Nav from '../components/nav'

export default class IndexPage extends React.Component{
  CmonDoSomething() {
    this.refs.logo.classList.toggle("something")
  }

  render() {
    return (
      <div className="">
        <div className="mx-auto container text-gray-100 font-serif text-lg transform ">
          <img ref="logo" className="mx-auto w-2/5 transition duration-1000 transform ease-in-out hover:scale-110 hover:rotate-180"
            src="/metaverse_globe.png" alt="Metaverse Globe Logo"
            onClick={this.CmonDoSomething.bind(this)} />
          <div className="text-center font-mono text-gray-800 text-5xl">
            <div className="bg-purple-200 inline px-1 rounded-sm">
              METAVERSE
          </div>
          </div>
          <Nav />
          <h1>About</h1>
          <p>Metaverse is a free hosting service for developers of the Asheron's Call community.</p>
          <p>Currently offer:</p>
          <ul className="yellow-bulleted">
            <li>
              Public Test Server <span>General purpose, easy admin access to vanilla ACE world (typically testing Metas and Decal plugins)</span>
            </li>
            <li>
              Content Development Servers <span>Private Virtual ACE Content servers with SQL and File access</span>
            </li>
            <li>
              Pull Request Server <span>Bot controlled automation deploys public server with ACE pull request changes</span>
            </li>
            <li>
              Ad Hoc Hosting <span>Supporting community with container based hosting like <a href="https://gitlab.com/trevis/achelperbot">@ACHelperBot</a></span>
            </li>
            <li>
              <a href="https://github.com/MetaverseAC/DiscordBot">Discord Bot</a> <span>Spawns and updates servers, manages roles</span>
            </li>
          </ul>
          <p>Access to all of these services is coordinated through <a href="http://discord.metaverse.ac">discord</a>.</p>
          <p>Created by <a href="https://discord.com/users/115195745782464512">@deca</a> (feel free to DM).</p>
        </div>
      </div>
    );
  }
}
