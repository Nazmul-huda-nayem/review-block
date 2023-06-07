const attributes = {
	style: {
		type: 'string',
		default: 'style-1',
	},
	title: {
		type: 'string',
	},
	titleTag: {
		type: 'string',
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
	},
	clientDesg: {
		type: 'string',
	},
	clientComment: {
		type: 'string',
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
