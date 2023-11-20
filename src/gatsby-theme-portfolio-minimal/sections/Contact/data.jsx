import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query ContactSectionQuery {
      allContactJson {
        sections: nodes {
          description
          email
          contact_reasons {
            reason
          }
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 140)
              }
            }
            objectFit
          }
          name
          socialProfiles {
            from
            showIcons
          }
        }
      }
    }
  `);
};
