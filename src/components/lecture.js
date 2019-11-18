import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import "../styles/markdown.css";

require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <div
      className="lecture-container"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        textAlign: "justify",
        fontSize: "0.8rem",
        paddingBottom: "20px"
      }}
    >
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="lecture">
        <h2>{post.frontmatter.title}</h2>
        <p>{post.frontmatter.date}</p>
        <hr />
        <div
          className="lecture-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <hr />
      <Link to="/intro_data_science">Back</Link>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
