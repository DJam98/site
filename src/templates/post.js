import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { format } from "date-fns"

import { rhythm, gray } from "src/utils/typography"
import Layout from "src/components/layout"

import Mention from "src/components/mention"
import Footer from "src/components/footer"

const shortcodes = { Mention, Footer }

const Post = ({ pageContext, children }) => (
  <Layout pageTitle={pageContext.frontmatter.title}>
    <div>
      <h1 style={{ marginBottom: rhythm(1 / 4) }}>
        {pageContext.frontmatter.title}
      </h1>
      <h2 className="text-muted" style={{ fontSize: rhythm(0.8) }}>
      {pageContext.frontmatter.author} · {format(new Date(pageContext.frontmatter.date), "MMMM dd, yyyy")}
      </h2>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </div>
  </Layout>
)

export default Post
