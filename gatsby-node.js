const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = `/posts/${path.basename(node.fileAbsolutePath, ".md")}`
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.fields.slug,
      },
    })
  })
}
