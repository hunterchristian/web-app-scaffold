import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>
      Frontend tech stack, optimized for low cost (when at idle) and high
      performance
    </h1>
    <p>
      This stack costs nothing to deploy until users begin using the product. It
      delivers a high performance experience that optimizes for unauthenticated
      users. In the case that a tech stack needs to optimize for authenticated
      users (or needs to account for SEO of volatile user-generated-content,
      like posts on Reddit), a renderer such as Next.js should be used to render
      with session data on a server.
    </p>
    <h3>
      Disagree?{' '}
      <Link to={`https://github.com/hunterchristian/web-app-scaffold/issues`}>
        Submit an issue in Github
      </Link>
    </h3>
    <p>Renderer - Gatsby.js</p>
    <p>View framework - React.js</p>
    <p>Type system - Typescript</p>
    <p>Backend - Firebase</p>
  </Layout>
)

export default IndexPage
