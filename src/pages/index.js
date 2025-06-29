import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./index.module.css"

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
        id
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.wrapper}>
        <h1>Posts</h1>
        <ul className={styles.postList}>
          {data.allMarkdownRemark.nodes.map(post => (
            <li key={post.id}>
              <Link to={post.fields.slug} className={styles.cardLink}>
                <div className={styles.postCard}>
                  <h2>{post.frontmatter.title}</h2>
                  <p>{post.frontmatter.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
