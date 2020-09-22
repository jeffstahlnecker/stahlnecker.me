import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const PureImage = ({ image, data }) => {
  return (
    <div>
      <Img fluid={image || data.file.childImageSharp.fluid} />
    </div>
  );
};

const Image = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "default.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return <PureImage data={data} {...props} />;
};

export default Image;
