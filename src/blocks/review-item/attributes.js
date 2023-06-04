const attributes = {
	style: {
		type: 'string',
		default: 'style-1',
	},
	title: {
		type: 'string',
	},
	titleTag: {
		type: 'string'
	},
	titleColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	photo: {
		type: 'object',
	},
	clientName: {
		type: 'string',
		default: 'Asikur Rahman',
	},
	clientDesg: {
		type: 'string',
		default: 'Web Developer',
	},
	clientComment: {
		type: 'string',
		default:
			'Type here some info about this team member, the man very important person of our company.',
	},
	showRating: {
		type: 'boolean',
		default: true,
	},
	rating: {
		type: 'number',
		default: 4.5,
	},
};

export default attributes;
