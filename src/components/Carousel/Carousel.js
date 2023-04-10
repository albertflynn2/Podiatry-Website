import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';


const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1380px" padding="80px 120px" inverse>
			<Row justify="space-between" margin="2rem" wrap="wrap">
				<Heading width="auto" inverse>
					Specialist Treatments
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '2.5rem', color: '#95CE59' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						
						<CarouselImage src={el.image} />
						
						<TextWrapper size="1.5rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="1.1rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						<a href={el.link} target="_blank" rel="noreferrer">
						<CardButton>Learn More</CardButton>
						</a>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;