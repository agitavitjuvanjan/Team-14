import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => {
  /*<div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>*/

  const logo = require('./logo.svg');

  const cssHeader = {
    backgroundColor: '#20232a',
    color: '#ffffff',
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    top: 0,
    left: 0,
    height: 60,
  };

  const cssHeaderContent = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 1260,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%'
  };

  const cssLogoLink = {
    display: 'block',
  };

  const cssLogo = {
    display: 'block',
    width: 60,
    marginBottom: 0
  };

  const cssNavigation = {
    flex: 1
  };

  const cssNavigationList = {
    listStyle: 'none',
    marginTop: 0,
    marginRight: 20,
    marginBottom: 0,
    marginLeft: 20,
  };

  const cssNavigationListItem = {
    margin: 0
  };

  const cssLink = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.2s ease-out'
  };

  const cssSearchInput = {
    background: 'url(./search.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'center',
    backgroundPositionX: 'left',
    paddingLeft: 30,
    border: 'none',
    fontSize: 16,
    width: 150
  };

  return (<header style={cssHeader}>
    <div style={cssHeaderContent}>
      <Link style={cssLogoLink} to='/'>
        <img style={cssLogo} src={logo} />
      </Link>

      <nav style={cssNavigation}>
        <ul style={cssNavigationList}>
          <li style={cssNavigationListItem}>
            <Link style={cssLink} to='/vscode'>Docs</Link>
          </li>
        </ul>
      </nav>

      <div className="search">
        <input style={cssSearchInput} placeholder="Search docs" />
      </div>

      <div className="github">
        <a style={cssLink} href="https://github.com/agitavitjuvanjan/Team-14" target="_blank">Github</a>
      </div>
    </div>
  </header>)
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '60px auto 0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
