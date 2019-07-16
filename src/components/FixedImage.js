import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const FixedImage = props => (
  <StaticQuery
    query={graphql`
      query fixedImage {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.fileName);
      });
      if (!image) {
        return null;
      }

      const picture = image.node.childImageSharp.fixed;
      return (
        <Img
          alt={props.alt}
          fixed={picture}
          className={props.className}
          imgStyle={{ width: props.width, height: props.height }}
        />
      );
    }}
  />
);

export default FixedImage;
