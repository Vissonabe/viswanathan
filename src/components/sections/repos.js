import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Icon } from '@components/icons';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 40px auto 0;
  }
`;

const StyledTableContainer = styled.div`
  margin: 80px -30px;
  @media (max-width: 768px) {
    margin: 50px -10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }
    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }
    th,
    td {
      padding: 10px;
      text-align: left;
      &:first-child {
        padding-left: 20px;
        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
    tr {
      cursor: default;
      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }
    td {
      &.year {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }
      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }
      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }
      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }
      &.links {
        min-width: 100px;
        div {
          display: flex;
          align-items: center;
          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }
          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const Repo = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                repositories {
                  nodes {
                    description
                    id
                    name
                    openGraphImageUrl
                    updatedAt(fromNow: true)
                    url
                    primaryLanguage {
                      name
                    }
                    languages {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes;

  const [showMore, setShowMore] = useState(false);

  const GRID_LIMIT = 6;
  // const projects = repos.filter(({ node }) => node);
  const firstSix = repos.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? repos : firstSix;

  return (
    <StyledProjectsSection>
      <h2>Other Noteworthy Projects</h2>

      <StyledTableContainer>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th className="hide-on-mobile">Languages</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {projectsToShow.length > 0 &&
              projectsToShow.map((node, i) => {
                const description = node.description;
                const lang = node.languages.nodes;
                const url = node.url;

                return (
                  <tr key={i}>
                    <td className="overline year">{node.name}</td>

                    <td className="title">
                      {description ? (
                        <span>{description}</span>
                      ) : (
                        <span>--</span>
                      )}
                    </td>

                    <td className="tech hide-on-mobile">
                      {lang.length > 0 &&
                        lang.map((item, i) => (
                          <span key={i}>
                            {item.name}
                            {''}
                            {i !== lang.length - 1 && (
                              <span className="separator">&middot;</span>
                            )}
                          </span>
                        ))}
                      {lang.length === 0 && <span>--</span>}
                    </td>

                    <td className="links">
                      <div>
                        {url && (
                          <a href={url} aria-label="GitHub Link">
                            <Icon name="GitHub" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </StyledTableContainer>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Repo;
