import React, { useState } from "react"
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
  const [sortOrder, setSortOrder] = useState("desc")

  const sortedPosts = [...data.allMarkdownRemark.nodes].sort((a, b) => {
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA
  })

  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.wrapper}>
        <h1>Posts</h1>
        <div className={styles.btnWrapper}>
          <button
            onClick={() =>
              setSortOrder(prev => (prev === "asc" ? "desc" : "asc"))
            }
            className={styles.sortButton}
          >
            Sort: {sortOrder === "asc" ? "Oldest First" : "Newest First"}
          </button>
        </div>
        <ul className={styles.postList}>
          {sortedPosts.map(post => (
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

export default IndexPage;