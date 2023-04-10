export const data = [

	{
		title: 'Reflexology',
		description:
			'Reduce pain, psychological symptoms and enhance relaxation and sleep',
		image: './assets/reflex.jpg',
		link: "https://www.youtube.com/watch?v=z8mWlgKMJZ0",
	},
	{
		title: 'Foot Pain & Injuries',
		description:
			`If you've got foot pain, stiffness or an ache`,
		image: './assets/footpain.png',
		link: "https://painconcern.org.uk/foot-pain/",
	},
	{
		title: 'Plantar Fasciitis ',
		description: 'Pain on the bottom of your foot, around your heel and arch',
		image: './assets/pf.jpg',
		link:"https://www.youtube.com/watch?v=A4jyGwZMC00",
	},
	{
		title: 'Diabetic Foot Care',
		description: 'High blood sugar may make your feet susceptible to injuries and infections',
		image: './assets/diabetic.png',
		link: "https://www.youtube.com/watch?v=45b1iRqdjMA",
	},
	{
		title: 'Ankle & Foot Arthritis',
		description: 'Pain, Joint stiffness, warmth, or swelling of the feet',
		image: './assets/arthritis.jpg',
		link:"https://www.youtube.com/watch?v=cPPbAn3g3jE",
	},
	{
		title: 'Nail Reconstructon',
		description: 'Infections, Trauma, Psoriatic, Split, Corns or Ingrown Nails',
		image: './assets/nail2.jpg',
		link:"https://www.youtube.com/watch?v=r7aNl2C6rv8",
	},
	{
		title: 'Warts & Verucas',
		description: 'Small lumps on the skin caused by a virus that you may get during your life',
		image: './assets/veruca.jpg',
		link:"https://www.youtube.com/watch?v=wYOmvkvgEuE",
	},
	{
		title: 'General Skin & Nail care',
		description: 'Cutting your toe nails, Corn and callus removal, Cracked skin',
		image: './assets/care.jpg',
		link:"https://www.aad.org/public/everyday-care/nail-care-secrets/basics/healthy-nail-tips",
	},
	
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
