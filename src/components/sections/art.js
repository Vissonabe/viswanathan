import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledSection = styled.div`
  margin: 100px 0px 100px 0px;

  text-align: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  h3 {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 750px;
  background-color: var(--navy);
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 50px 0px 50px 0px;
`;

const StyledInner = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  padding: 10px;
  margin: 10px 0px 0px 0px;

  @media (max-width: 768px) {
    height: 250px;
  }

  .wrapper {
    position: relative;

    &:hover {
      h2 {
        opacity: 0;
      }
    }

    h2 {
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xxl);
      line-height: 1;
      position: absolute;
      left: 30px;
      bottom: 0px;
    }

    .img {
      width: 300px;
      height: 350px;
      opacity: 0.4;
      margin: 6px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const Art = () => {
  const artData = useStaticQuery(graphql`
    query {
      arts: allFile(filter: { absolutePath: { regex: "/art/" } }) {
        edges {
          node {
            absolutePath
            name
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const totalitems = 12;
  const halfitems = 6;
  const repos = artData.arts.edges;
  const firstSix = repos.slice(0, halfitems);
  const secondSix = repos.slice(halfitems, totalitems);
  const twoList = [firstSix, secondSix];
  const subTitle =
    '#FaberCastel - #Polychrome color pencil - #Graphite pencil - #Acrylic';

  return (
    <StyledSection>
      <h2>Recent Art work</h2>
      <h3>{subTitle}</h3>

      <StyledContainer>
        {twoList.map((artList, i) => (
          <StyledInner key={i}>
            {artList.map((art, x) => {
              const img = art.node.childImageSharp.fluid;
              const alt = art.node.name;

              return (
                <div className="wrapper" key={x}>
                  <Img
                    fluid={img}
                    alt={alt}
                    className="img"
                    draggable="false"
                    title={alt}
                  />
                  <h2>{alt}</h2>
                </div>
              );
            })}
            ;
          </StyledInner>
        ))}
      </StyledContainer>
    </StyledSection>
  );
};

export default Art;
