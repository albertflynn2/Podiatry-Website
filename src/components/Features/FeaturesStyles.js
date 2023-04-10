import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background:  #FFFFFF;
	padding: 10px;
	box-shadow: 0 0 27px 3px  #95CE59;
	border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 700;
	font-size: 1.6rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 600;
		font-size: 1.2rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1.2rem 0 auto;
	font-weight: 550;
	text-align: center;
	font-size: 1.2rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #36454F;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;