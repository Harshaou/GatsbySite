import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
      <div className="home">
      <Layout>
      <h1>Full Stack Developer</h1>
      <p>Need a Developer ? <Link to="/contact">Contact me</Link> </p>
      </Layout>
    
    </div>
  )
}

export default IndexPage
