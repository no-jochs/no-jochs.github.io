import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query TeachingSectionQuery {
      allTeachingMarkdown: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/sections/teaching/" } }
      ) {
        sections: nodes {
          frontmatter {
            videoSrcURL
          }
          html
        }
      }
    }
  `);
};
