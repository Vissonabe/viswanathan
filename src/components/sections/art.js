import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ImageModal } from '@components';
import { artImages } from '@config';

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

  .wrapper {
    position: relative;
    cursor: pointer;

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
      display: block;
      width: 300px;
      height: 350px;
      opacity: 0.4;
      margin: 6px;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

      &:hover {
        opacity: 1;
        transform: scale(1.02);
      }
    }
  }
`;

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artData = useStaticQuery(graphql`
    query {
      arts: allFile(filter: { absolutePath: { regex: "/art/" } }) {
        edges {
          node {
            absolutePath
            name
            childImageSharp {
              gatsbyImageData(
                width: 800
                height: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
              original {
                src
                width
                height
              }
            }
          }
        }
      }
    }
  `);

  // Sort images according to the order defined in config
  const sortedArtData = artData.arts.edges.sort((a, b) => {
    const aConfig = artImages.find(img => img.filename === `${a.node.name}.jpg`);
    const bConfig = artImages.find(img => img.filename === `${b.node.name}.jpg`);
    
    if (!aConfig || !bConfig) return 0;
    return aConfig.order - bConfig.order;
  });

  const totalitems = 12;
  const halfitems = 6;
  const repos = sortedArtData;
  const firstSix = repos.slice(0, halfitems);
  const secondSix = repos.slice(halfitems, totalitems);
  const twoList = [firstSix, secondSix];
  const subTitle =
    '#FaberCastel - #Polychrome color pencil - #Graphite pencil - #Acrylic';

  const handleImageClick = (art, event) => {
    if (!art.node.childImageSharp) return;
    // Use the original high-resolution image for the modal
    const originalData = art.node.childImageSharp.original;
    const imageName = art.node.name;
    
    // Get the clicked image position for animation
    const rect = event.currentTarget.getBoundingClientRect();
    const imagePosition = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
    
    // Get additional info from config
    const imageConfig = artImages.find(img => img.filename === `${imageName}.jpg`);
    const displayTitle = imageConfig ? imageConfig.title : imageName;
    
    console.log('Art image data:', { originalData, imageName, imagePosition, displayTitle });
    
    setSelectedImage({
      src: originalData.src,
      alt: displayTitle,
      width: originalData.width,
      height: originalData.height,
      position: imagePosition
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <StyledSection>
      <h2>Recent Art work</h2>
      <h3>{subTitle}</h3>

      <StyledContainer>
        {twoList.map((artList, i) => (
          <StyledInner key={i}>
            {artList.map((art, x) => {
              const img = art.node.childImageSharp ? getImage(art.node.childImageSharp) : null;
              const imageName = art.node.name;
              
              // Get display title from config
              const imageConfig = artImages.find(img => img.filename === `${imageName}.jpg`);
              const displayTitle = imageConfig ? imageConfig.title : imageName;

              return (
                <div 
                  className="wrapper" 
                  key={x}
                  onClick={(event) => art.node.childImageSharp && handleImageClick(art, event)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && art.node.childImageSharp) {
                      e.preventDefault();
                      handleImageClick(art, e);
                    }
                  }}
                  aria-label={`Click to view ${displayTitle} in full size`}
                >
                  {img && (
                    <GatsbyImage
                      image={img}
                      alt={displayTitle}
                      className="img"
                      draggable="false"
                      title={displayTitle}
                    />
                  )}
                  <h2>{displayTitle}</h2>
                </div>
              );
            })}
            ;
          </StyledInner>
        ))}
      </StyledContainer>

      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={handleCloseModal}
      />
    </StyledSection>
  );
};

export default Art;
