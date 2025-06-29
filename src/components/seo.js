import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Gatsby Blog</title>
      <meta name="description" content="My simple Gatsby blog" />
    </Helmet>
  )
}

export default Seo
