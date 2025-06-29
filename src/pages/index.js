import React from "react"
import { graphql, Link } from "gatsby"
import * as styles from "./index.module.css";

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
    <div className={styles.wrapper}>
      <h1>Блог</h1>
      <ul>
        {data.allMarkdownRemark.nodes.map(post => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              {post.frontmatter.title} ({post.frontmatter.date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage
