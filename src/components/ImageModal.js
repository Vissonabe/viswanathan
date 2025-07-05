import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const scaleOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.3);
    opacity: 0;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: visibility 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  animation: ${props => props.isOpen ? fadeIn : fadeOut} 0.3s ease-out;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${props => props.isOpen ? scaleIn : scaleOut} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ModalImage = styled.img`
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: block;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    max-width: calc(100vw - 20px);
    max-height: calc(100vh - 20px);
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  z-index: 1001;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  color: white;
  font-size: 1.2rem;
`;

const ImageModal = ({ isOpen, image, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleTouchStart = (e) => {
      // Prevent body scroll when modal is open
      if (isOpen) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.body.style.overflow = 'hidden';
      // Reset states when modal opens
      setImageLoaded(false);
      setImageError(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('touchstart', handleTouchStart);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  console.log('ImageModal props:', { isOpen, image });

  if (!image || !image.src) {
    console.log('No image data available');
    return null;
  }

  console.log('Modal image details:', {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height
  });

  return (
    <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent isOpen={isOpen}>
        <CloseButton onClick={onClose} aria-label="Close modal">
          ×
        </CloseButton>
        
        {!imageLoaded && !imageError && (
          <LoadingSpinner>Loading image...</LoadingSpinner>
        )}
        
        {imageError && (
          <LoadingSpinner>Error loading image</LoadingSpinner>
        )}
        
        <ModalImage
          src={image.src}
          alt={image.alt}
          draggable="false"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            display: imageLoaded ? 'block' : 'none'
          }}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageModal; 