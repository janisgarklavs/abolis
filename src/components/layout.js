import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../utils/index.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="lv" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="font-sans">
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
