import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const FluidImage = props => (
  <StaticQuery
    query={graphql`
      query fluidImage {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
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

      const picture = image.node.childImageSharp.fluid;
      return (
        <Img alt={props.alt} fluid={picture} className={props.className} />
      );
    }}
  />
);

export default FluidImage;
