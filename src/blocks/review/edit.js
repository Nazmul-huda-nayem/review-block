import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';
import './style.scss';
import * as Constants from './constants';
const {
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
	NAME_FONT_SIZE,
	DESC_FONT_SIZE,
	DESG_FONT_SIZE,
	RATING_SIZE,
	IMAGE_SIZE,
	ITEM_PADDING,
	ITEM_BORDER_RADIUS,
} = Constants;

// Edit Function
export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		titleColor,
		titleHoverColor,
		descriptionColor,
		designationColor,
		descriptionHoverColor,
		designationHoverColor,
		boxBgColor,
		boxBgHoverColor,
		activeRatingColor,
		inactiveRatingColor,
		textAlign,
	} = attributes;

	// unique id
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: `bdt-review-blocks-${clientId.slice(0, 8)}`,
			});
		}
	}, []);

	// function to convert object to css
	const convertToCss = (obj) => {
		let cssResult;
		Object.keys(obj).reduce((cssString, key) => {
			// change key to css property
			const cssProperty = key.replace(
				/[A-Z]/g,
				(match) => `-${match.toLowerCase()}`
			);
			cssResult = `${cssString}${cssProperty}:${obj[key]};`;
			return cssResult;
		}, '');
		return cssResult;
	};

	const deskCols = attributes[`${GRID_COLUMNS}DeskRange`];
	const tabCols = attributes[`${GRID_COLUMNS}TabRange`];
	const mobCols = attributes[`${GRID_COLUMNS}MobRange`];
	// Grid Coloumn Gap
	const deskGap = attributes[`${GRID_GAP}DeskRange`];
	const tabGap = attributes[`${GRID_GAP}TabRange`];
	const mobGap = attributes[`${GRID_GAP}MobRange`];
	const gapUnit = attributes[`${GRID_GAP}Unit`];
	// Grid Row Gap
	const deskRowGap = attributes[`${ROW_GAP}DeskRange`];
	const tabRowGap = attributes[`${ROW_GAP}TabRange`];
	const mobRowGap = attributes[`${ROW_GAP}MobRange`];
	const gapRowUnit = attributes[`${ROW_GAP}Unit`];
	// Name Font Size
	const deskNameFont = attributes[`${NAME_FONT_SIZE}DeskRange`];
	const tabNameFont = attributes[`${NAME_FONT_SIZE}TabRange`];
	const mobNameFont = attributes[`${NAME_FONT_SIZE}MobRange`];
	const nameFontUnit = attributes[`${NAME_FONT_SIZE}Unit`];
	// DESG Font Size
	const deskDesgFont = attributes[`${DESG_FONT_SIZE}DeskRange`];
	const tabDesgFont = attributes[`${DESG_FONT_SIZE}TabRange`];
	const mobDesgFont = attributes[`${DESG_FONT_SIZE}MobRange`];
	const desgFontUnit = attributes[`${DESG_FONT_SIZE}Unit`];
	// DESC Font Size
	const deskDescFont = attributes[`${DESC_FONT_SIZE}DeskRange`];
	const tabDescFont = attributes[`${DESC_FONT_SIZE}TabRange`];
	const mobDescFont = attributes[`${DESC_FONT_SIZE}MobRange`];
	const descFontUnit = attributes[`${DESC_FONT_SIZE}Unit`];
	// Rating Size
	const deskRatingSize = attributes[`${RATING_SIZE}DeskRange`];
	const tabRatingSize = attributes[`${RATING_SIZE}TabRange`];
	const mobRatingSize = attributes[`${RATING_SIZE}MobRange`];
	const ratingUnit = attributes[`${RATING_SIZE}Unit`];
	// Image Size
	const deskImageSize = attributes[`${IMAGE_SIZE}DeskRange`];
	const tabImageSize = attributes[`${IMAGE_SIZE}TabRange`];
	const mobImageSize = attributes[`${IMAGE_SIZE}MobRange`];
	const imageUnit = attributes[`${IMAGE_SIZE}Unit`];
	// Item Padding
	const deskItemPadding = attributes[`${ITEM_PADDING}DeskRange`];
	const tabItemPadding = attributes[`${ITEM_PADDING}TabRange`];
	const mobItemPadding = attributes[`${ITEM_PADDING}MobRange`];
	const itemPaddingUnit = attributes[`${ITEM_PADDING}Unit`];
	// Item Border Radius
	const deskItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}DeskRange`];
	const tabItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}TabRange`];
	const mobItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}MobRange`];
	const itemBorderRadiusUnit = attributes[`${ITEM_BORDER_RADIUS}Unit`];

	const itemDeskStyles = {
		...(deskItemPadding !== undefined &&
			deskItemPadding !== '' && {
				padding: `${deskItemPadding}${itemPaddingUnit}`,
			}),
		...(deskItemBorderRadius !== undefined &&
			deskItemBorderRadius !== '' && {
				borderRadius: `${deskItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
	};
	const itemTabStyles = {
		...(tabItemPadding !== undefined &&
			tabItemPadding !== '' && {
				padding: `${tabItemPadding}${itemPaddingUnit}`,
			}),
		...(tabItemBorderRadius !== undefined &&
			tabItemBorderRadius !== '' && {
				borderRadius: `${tabItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
	};
	const itemMobStyles = {
		...(mobItemPadding !== undefined &&
			mobItemPadding !== '' && {
				padding: `${mobItemPadding}${itemPaddingUnit}`,
			}),
		...(mobItemBorderRadius !== undefined &&
			mobItemBorderRadius !== '' && {
				borderRadius: `${mobItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
	};

	const deskStyles = `
		.${uniqueId} .block-editor-block-list__layout,
		.${uniqueId}.bdt-item {
			grid-template-columns: repeat(${deskCols}, 1fr);
			grid-column-gap: ${deskGap}${gapUnit};
			grid-row-gap: ${deskRowGap}${gapRowUnit};
		}

		${
			Object.keys(itemDeskStyles).length > 0
				? `.${uniqueId} .wp-block-bdt-review-item{${convertToCss(
						itemDeskStyles
				  )}}`
				: ' '
		}
		${
			deskImageSize !== undefined && deskImageSize !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-image-wrap {
				width: ${deskImageSize}${imageUnit};
				height: ${deskImageSize}${imageUnit};
			}`
				: ' '
		}
		.${uniqueId} .bdt-content {
			align-items: ${textAlign};
			text-align: ${textAlign};
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-name {
			font-size: ${deskNameFont}${nameFontUnit};
		}
		${
			titleColor !== undefined && titleColor !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-name {
				color: ${titleColor};
			}`
				: ' '
		}
		${
			titleHoverColor !== undefined && titleHoverColor !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-name:hover {
				color: ${titleHoverColor};
			}`
				: ' '
		}
		${
			designationColor !== undefined && designationColor !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-designation{
				color: ${designationColor};
			}`
				: ' '
		}
		${
			designationHoverColor !== undefined && designationHoverColor !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-designation:hover {
				color: ${designationHoverColor};
			}`
				: ' '
		}
		${
			descriptionColor !== undefined && descriptionColor !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-desc {
				color: ${descriptionColor};
			}`
				: ' '
		}
		${
			descriptionHoverColor !== undefined && descriptionHoverColor !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-desc:hover {
				color: ${descriptionHoverColor};
			}`
				: ' '
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-designation {
			font-size: ${deskDesgFont}${desgFontUnit};
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-desc {
			font-size: ${deskDescFont}${descFontUnit};
		}
		
		${
			boxBgColor !== undefined &&
			boxBgColor !== '' &&
			`.${uniqueId} .wp-block-bdt-review-item {
				background: ${boxBgColor};
			}`
		}
		${
			boxBgHoverColor !== undefined &&
			boxBgHoverColor !== '' &&
			`.${uniqueId} .wp-block-bdt-review-item:hover {
				background: ${boxBgHoverColor};
			}`
		}
		${
			activeRatingColor !== undefined &&
			activeRatingColor !== '' &&
			`.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
			.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before,
			.${uniqueId} .rate-select-layer span {
				color: ${activeRatingColor};
			}`
		}
		${
			inactiveRatingColor !== undefined &&
			inactiveRatingColor !== '' &&
			`.${uniqueId} .rate-base-layer span
			.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before {
				color: ${inactiveRatingColor};
			}`
		}
	
		${
			deskRatingSize !== undefined && deskRatingSize !== ''
				? `.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
		 		   .${uniqueId} .bdt-review-icon .react-rater-star.is-disabled,
		 		   .${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before,
		 		   .${uniqueId} .rate-base-layer span,
		 		   .${uniqueId} .rate-select-layer span {
				  font-size: ${deskRatingSize}${ratingUnit};
			   }`
				: ' '
		}
	`;
	const tabStyles = `
		.${uniqueId} .block-editor-block-list__layout,
		.${uniqueId}.bdt-item {
			grid-template-columns: repeat(${tabCols}, 1fr);
			grid-column-gap: ${tabGap}${gapUnit};
			grid-row-gap: ${tabRowGap}${gapRowUnit};
		}
		${
			Object.keys(itemTabStyles).length > 0
				? `.${uniqueId} .wp-block-bdt-review-item{${convertToCss(
						itemTabStyles
				  )}}`
				: ' '
		}
		${
			tabImageSize !== undefined && tabImageSize !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-image-wrap {
				width: ${tabImageSize}${imageUnit};
				height: ${tabImageSize}${imageUnit};
			}`
				: ' '
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-name {
			font-size: ${tabNameFont}${nameFontUnit};
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-designation {
			font-size: ${tabDesgFont}${desgFontUnit};
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-desc {
			font-size: ${tabDescFont}${descFontUnit};
		}
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-disabled,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before {
			font-size: ${tabRatingSize}${ratingUnit};
		}
	`;
	const mobStyles = `
		.${uniqueId} .block-editor-block-list__layout,
		.${uniqueId}.bdt-item {
			grid-template-columns: repeat(${mobCols}, 1fr);
			grid-column-gap: ${mobGap}${gapUnit};
			grid-row-gap: ${mobRowGap}${gapRowUnit};
		}
		${
			Object.keys(itemMobStyles).length > 0
				? `.${uniqueId} .wp-block-bdt-review-item{${convertToCss(
						itemMobStyles
				  )}}`
				: ' '
		}
		${
			mobImageSize !== undefined && mobImageSize !== ''
				? `.${uniqueId} .wp-block-bdt-review-item .bdt-image-wrap {
				width: ${mobImageSize}${imageUnit};
				height: ${mobImageSize}${imageUnit};
			}`
				: ' '
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-name {
			font-size: ${mobNameFont}${nameFontUnit};
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-designation {
			font-size: ${mobDesgFont}${desgFontUnit};
		}
		.${uniqueId} .wp-block-bdt-review-item .bdt-content .bdt-desc {
			font-size: ${mobDescFont}${descFontUnit};
		}
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-disabled,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before {
			font-size: ${mobRatingSize}${ratingUnit};
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: uniqueId,
				})}
			>
				<InnerBlocks
					allowedBlocks={['bdt/review-item']}
					template={[
						['bdt/review-item'],
						['bdt/review-item'],
						['bdt/review-item'],
					]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</Fragment>
	);
}
