import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledBlogsSection = styled.section`
  max-width: 900px;

  .inner {
    display: block;
    padding: 0;
    align-items: flex-start;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledLi = styled.li`
  list-style-type: none;
  padding: 20px 20px 20px 20px;

  margin-bottom: 20px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }

  .subtitle {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .date {
    float: right;
  }
`;

const StyledA = styled.a`
  color: var(--green);
`;

const Blog = () => {
  // const blogsData = data.allMarkdownRemark.edges;

  const data = useStaticQuery(graphql`
    query {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blogs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              subTitle
              url
            }
            html
          }
        }
      }
    }
  `);

  const blogsData = data.blogs.edges;

  return (
    <StyledBlogsSection>
      <h2 className="numbered-heading">Blogs</h2>
      <div className="inner">
        <ul style={{ padding: 0 }}>
          {blogsData &&
            blogsData.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, url, subTitle, date } = frontmatter;
              return (
                <StyledLi key={i}>
                  <div>
                    <h3 className="date">{date}</h3>
                    <h2>{title}</h2>

                    <h3 className="subtitle">{subTitle}</h3>
                    <StyledA href={url}>{url}</StyledA>
                  </div>
                </StyledLi>
              );
            })}
        </ul>
      </div>
    </StyledBlogsSection>
  );
};

export default Blog;
