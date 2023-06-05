import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const {
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
	NAME_FONT_SIZE,
	DESC_FONT_SIZE,
	DESG_FONT_SIZE,
	IMAGE_SIZE,
	ITEM_BORDER_RADIUS,
	ITEM_PADDING,
} = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	style: {
		type: 'string',
		default: 'style-1',
	},
	blockStyle: {
		type: 'object',
	},
	title: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	titleHoverColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	designationColor: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	boxBgColor: {
		type: 'string',
	},
	designationHoverColor: {
		type: 'string',
	},
	descriptionHoverColor: {
		type: 'string',
	},
	boxBgHoverColor: {
		type: 'string',
	},
	activeRatingColor: {
		type: 'string',
	},
	inactiveRatingColor: {
		type: 'string',
	},
	textAlign: {
		type: 'string',
		default: 'left',
	},
	...generateResRangleControlAttributes({
		controlName: GRID_COLUMNS,
		defaults: {
			[`${GRID_COLUMNS}DeskRange`]: 3,
			[`${GRID_COLUMNS}TabRange`]: 2,
			[`${GRID_COLUMNS}MobRange`]: 1,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: GRID_GAP,
		defaults: {
			[`${GRID_GAP}DeskRange`]: 30,
			[`${GRID_GAP}TabRange`]: 30,
			[`${GRID_GAP}MobRange`]: 30,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ROW_GAP,
		defaults: {
			[`${ROW_GAP}DeskRange`]: 40,
			[`${ROW_GAP}TabRange`]: 40,
			[`${ROW_GAP}MobRange`]: 40,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: NAME_FONT_SIZE,
		defaults: {
			[`${NAME_FONT_SIZE}DeskRange`]: 20,
			[`${NAME_FONT_SIZE}TabRange`]: 18,
			[`${NAME_FONT_SIZE}MobRange`]: 16,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: DESG_FONT_SIZE,
		defaults: {
			[`${DESG_FONT_SIZE}DeskRange`]: 13,
			[`${DESG_FONT_SIZE}TabRange`]: 13,
			[`${DESG_FONT_SIZE}MobRange`]: 13,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: DESC_FONT_SIZE,
		defaults: {
			[`${DESC_FONT_SIZE}DeskRange`]: 15,
			[`${DESC_FONT_SIZE}TabRange`]: 15,
			[`${DESC_FONT_SIZE}MobRange`]: 15,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: IMAGE_SIZE,
		defaults: {
			[`${IMAGE_SIZE}DeskRange`]: '',
			[`${IMAGE_SIZE}TabRange`]: '',
			[`${IMAGE_SIZE}MobRange`]: '',
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_PADDING,
		defaults: {
			[`${ITEM_PADDING}DeskRange`]: '',
			[`${ITEM_PADDING}TabRange`]: '',
			[`${ITEM_PADDING}MobRange`]: '',
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_BORDER_RADIUS,
		defaults: {
			[`${ITEM_BORDER_RADIUS}DeskRange`]: '',
			[`${ITEM_BORDER_RADIUS}TabRange`]: '',
			[`${ITEM_BORDER_RADIUS}MobRange`]: '',
		},
	}),
};

export default attributes;
