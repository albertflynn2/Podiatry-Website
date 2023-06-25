import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ImageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  & svg {
    margin: 0 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: #36454F;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #95CE59;
    }
  }
`;


export const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    outline: none;
  }
`;

export const CardButton = styled.button`
  background-color: #36454F;
  font-size: 1.3rem;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #95CE59;
  }
`;

