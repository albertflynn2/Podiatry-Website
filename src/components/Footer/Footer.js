import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
	FooterPhoneIcon,
	FooterImg,
} from './FooterStyles';

import Iframe from 'react-iframe'
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';
import {AiOutlinePhone} from 'react-icons/ai'
import Table from "../Table/OpeningHoursTable";
import { tableData } from '../../data/TableData';


const Callto = ({ phone, children }) => {
	return <a href={`tel:${phone}`}>{children}</a>;
  };

function Footer() {
	return (

		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src="./assets/logo.png" />
							Heal Podiatry
						</FooterLogo>
						<FooterAddress>
						6 Ballycasey Business Park, Shannon, Clare. V14X622
							<br></br>
							<FooterPhoneIcon>
							<Callto phone="+353830900675">Call Us!<AiOutlinePhone/></Callto>
							</FooterPhoneIcon>
						</FooterAddress>

						<Table data={tableData} />

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href={social.link}
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>

					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
					<br></br>
					<FooterImg/>
					<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9668.343870092207!2d-8.876645061414944!3d52.71259352761586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b41d839592375%3A0x778225aef6970392!2sBallycasey%20More%2C%20Shannon%2C%20Co.%20Clare%2C%20V14%20X622!5e0!3m2!1sen!2sie!4v1676297443388!5m2!1sen!2sie" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
					
				</FooterGrid>
			</FooterWrapper>
			<FooterRights>Heal Podiatry © 2022</FooterRights>
		</Section>
	);
}

export default Footer;