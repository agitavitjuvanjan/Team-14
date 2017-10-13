import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new site.</p>
    <p>Now go build something great.</p>

    <ul>
      <li><Link to="/aspnetcore">ASP.NET Core</Link></li>
      <li><Link to="/gatsbyjs">Gatsbyjs</Link></li>
      <li><Link to="/npm">NPM</Link></li>
      <li><Link to="/react">React</Link></li>
      <li><Link to="/typescript">Typescript</Link></li>
      <li><Link to="/vscode">Visual Studio Code</Link></li>
      <li><Link to="/webpack">Webpack</Link></li>
    </ul>
  </div>
)

export default IndexPage
