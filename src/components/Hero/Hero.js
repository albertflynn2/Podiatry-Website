import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import Typewriter from 'typewriter-effect';

const Hero = () => {
	return (
		<HeroSection>
			 {/*<HeroVideo src="./assets/sandsteps.mp4" loop autoPlay muted />
			  */}
			  <HeroImage src="./assets/heroimage.png"/>
			<Container>
				<MainHeading>Heal Podiatry Foot Health & Wellbeing Clinic</MainHeading>
				<HeroText>
				<Typewriter 
				options={{strings: ['Heal your Sole'],
    			autoStart: true,
    			loop: true,
 				 }}
				/>
				</HeroText>
				<ButtonWrapper>
					<Link to="contact">
						<Button>Email Us</Button>
					</Link>
					<Link to="about">
					<HeroButton>Who We Are</HeroButton>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;