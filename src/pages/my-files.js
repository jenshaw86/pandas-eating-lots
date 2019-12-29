import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>relativePath</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.id}</td>
                <td>{node.relativePath}</td>
                <td>{node.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allFile {
    edges {
      node {
        id
        relativePath
        name
      }
    }
  }
}

`