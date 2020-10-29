import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBlogsSection = styled.section`

  max-width: 900px;

  .inner {
    display: block;
    padding : 0;
    align-items:flex-start;

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
    
`;

const StyledA = styled.a `
    color: var(--green);
`;


const Repo = () => {

    const [githubInfo, setGitHubInfo] = useState({
        repos: null,
      });
    
      useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
          return;
        }
        fetch('https://api.github.com/users/vissonabe/repos?per_page=10')
          .then(response => response.json())
          .then(json => {
            console.log(json)
            setGitHubInfo({
              repos: json
            });
          })
          .catch(e => console.error(e));
      }, []);

    return (
        <div>
        <h1>Repos</h1>
    <ul>
        {githubInfo.repos && githubInfo.repos.map(({ node }, i) => {
            const { name, html_url} = node
            return (
            <li>
                <h1>{name}</h1>
                <h3>{html_url}</h3>
            </li>
            );
        })}
    </ul>
    </div>
    );
}

Repo.propTypes = {
    githubInfo: PropTypes.object,
  };

export default Repo