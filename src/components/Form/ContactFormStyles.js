import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	color: #fff;
	padding: 220px 0;
	/* background: ${({ inverse }) => (inverse ? '#101522' : '#fff')}; */
	background: #95CE59;
	display: flex;
  justify-content: center;
  align-items: center;

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
  justify-content: center;
  align-items: center;

`;
export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 50px;
	background: white;
	border: 20px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	color:  #36454F;

	@media screen and (max-width: 768px) {
		width: 90%;
		&:hover {
			transform: none;
		}

`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;

	@media screen and (max-width: 768px) {
		width: 90%;
		&:hover {
			transform: none;
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
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

`;

export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	vertical-align: middle;
	max-height: 800px;
	opacity: 0.2;
	background-position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 80%;


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

  &hover {
	transform: translateY(-2px);

	
  }
`;
