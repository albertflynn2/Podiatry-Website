import React from 'react';
import {BiHappyHeartEyes} from 'react-icons/bi';
import {GiTripleNeedle} from 'react-icons/gi';
import {FaChild, FaShoePrints, FaRunning, FaCommentMedical } from 'react-icons/fa';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Initial Consultation',
		description: 'Presenting your problem with our registered medical practitioner',
		icon: iconStyle(FaCommentMedical),
		imgClass: 'one',
	},
	{
		name: 'Biomechanics',
		description: 'Assessment examining the lower limbs to analyse causes of foot pain',
		icon: iconStyle(FaRunning),
		imgClass: 'two',
	},
	{
		name: 'Pediatric Podiatry',
		description: 'Diagnosis and treatment of foot and ankle issues in newborns, adolescents, and teens',
		icon: iconStyle(FaChild),
		imgClass: 'three',
	},
	{
		name: 'Orthotics',
		description: 'Custom orthotics designed to support problem spots in your feet',
		icon: iconStyle(FaShoePrints),
		imgClass: 'four',
	},
	{
		name: 'Diabetic Foot Exam',
		description: 'Assessing Diabetic patients for infection, injury, and bone abnormalities',
		icon: iconStyle(GiTripleNeedle),
		imgClass: 'five',
	},
	{
		name: 'Cosmetics',
		description:
			'Complete Cosmetic Podiatry Service to keep your feet in top condition',
		icon: iconStyle(BiHappyHeartEyes),
		imgClass: 'six',
	},
];
