import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
  color: #fff;
  padding: 220px 0;
  background: #95CE59;
  background: ${({ inverse }) => (inverse ? '#101522' : '##95CE59')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 160px 0;
   
  }
`;

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;


export const FormHeading = styled.h3`
  color: #36454F;
  align-items: center;
  margin-bottom: 34px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
`;

export const FormTitle = styled.h1`
  align-items: center;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const FormColumn = styled.div`
  padding: 50px;
  background: white;
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 30px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  color: #36454F;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;


export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? 'red' : 'green')};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;

export const FormWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  max-height: 400px;
  opacity: 0.2;
  object-fit: cover;
`;

export const FormButton = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding: 6px 8px;
  margin: 0 5px 0 0;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

