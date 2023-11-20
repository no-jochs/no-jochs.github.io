import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query TeachingSectionQuery {
      allTeachingMarkdown: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/sections/teaching/" } }
      ) {
        sections: nodes {
          frontmatter {
            imageAlt
            imageSrc {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
          html
        }
      }
    }
  `);
};
