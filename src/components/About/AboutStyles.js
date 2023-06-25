import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.div`
  padding: 140px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #95CE59;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    margin: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    > div {
      width: 90%;
    }
  }
`;

export const AboutTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`;

export const AboutTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 3rem;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  align-items: center;
  background: #FFFFFF;
  padding: 1px;
  box-shadow: 0 0 27px 3px #95CE59;
  border-radius: 15px;
  border-style: ridge;
  border-width: 0.8rem;
  border-image-slice: 70;
  border-image-width: 40%;
  border-image-repeat: repeat;
  border-image-outset: 5;

  > div {
    margin: 0.7rem;
  }
  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98%;
    > div {
      width: 90%;
    }
  }
`;

export const AboutImageWrapper = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 550px;

  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const AboutImage = styled(motion.img)`
  padding-right: 10px;
  border-radius: 10px;
  max-width: 80%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 300px;
  z-index: 1;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

export const AboutName = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

export const AboutText = styled.p`
  margin: 1rem 0 auto;
  font-weight: 450;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #36454F;
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.9px;
  }
`;


