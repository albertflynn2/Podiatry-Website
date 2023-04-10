import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
	FormButton,
	FormHeading,
	FormSection,
	FormContainer,
	FormTitle,
	FormColumn,
	FormRow,
	FormWrapper,
	FormMessage,
	FormInputRow,
	FormInput,
	FormLabel
} from './ContactFormStyles.js';

const service = process.env.REACT_APP_SERVICE;
const template = process.env.REACT_APP_TEMPLATE
const publicKey = process.env.REACT_APP_PUBLIC_KEY

const ContactForm = () => {
	const form = useRef();

		const sendEmail = (e) => {
		  e.preventDefault();
	  
		  emailjs.sendForm(service, template , form.current, publicKey)
			.then((result) => {
				console.log(result.status, result.text);
				alert("Email Sent Successfully!");
			}, (error) => {
				console.log('FAILED...',error.text);
				alert("Error Occurred!");
			});
			e.target.reset();
		};
		
	

	return (
		<FormSection>
			<FormContainer>
				<FormColumn>
				<FormRow>
				<FormTitle>Contact Us</FormTitle>
				<FormHeading>To book an appointment, please fill out this form. Alternatively, 
					you can call our Shannon Clinic at 0830900675 or email Heal Podiatry at info@healpodiatry.ie.
				</FormHeading>
				
				<FormWrapper ref={form}
				onSubmit={sendEmail}>
				<FormMessage>
				<FormInputRow>
				
				<FormInput type="text" placeholder= "Full Name" name="user_name" required/>
				<FormInput type="email" placeholder= "Email" name="user_email" required/>
				<FormInput type="text" placeholder= "Subject" name="subject" required/>
		
				</FormInputRow>
				</FormMessage>
				
				<textarea name='message' cols="60" rows="10">
				</textarea> <FormLabel/>
				
				<button type='submit'><FormButton>Send</FormButton></button>
				
				</FormWrapper>
				</FormRow>
				</FormColumn>
			</FormContainer>
		</FormSection>
	)
}

export default ContactForm;

