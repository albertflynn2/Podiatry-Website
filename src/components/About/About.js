import React from 'react';
import { Heading, TextWrapper } from '../../globalStyles';
import {
	AboutSection,
	AboutWrapper,
	AboutContainer,
  AboutColumn,
  AboutImageWrapper,
  AboutName,
  AboutText,
  AboutImage,
} from './AboutStyles';
import { aboutData } from '../../data/AboutData';



function About(){

	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};
  
  return (
			<AboutSection id="about">
				
					<Heading>About Us</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
					</TextWrapper>
					<AboutContainer>
         			 <AboutWrapper>
					{aboutData.map((el, index) => (
						<AboutColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
						>
							<AboutImageWrapper key={index}>
							<AboutImage src={el.image} />
							<br></br>
							<AboutName>{el.title}</AboutName>
							<AboutText>{el.description}</AboutText>
							</AboutImageWrapper>
						</AboutColumn>

					))}
					
				</AboutWrapper>

					</AboutContainer>
			
			</AboutSection>
		
  );
  
};
 
 
export default About;

