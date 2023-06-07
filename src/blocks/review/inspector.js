/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, CardDivider } from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

import './editor.scss';
import aligns from '../../options/align';
const { ResRangleControl, ColorControl, Alignment } = Controls;
const {
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
	NAME_FONT_SIZE,
	DESG_FONT_SIZE,
	DESC_FONT_SIZE,
	IMAGE_SIZE,
	ITEM_PADDING,
	ITEM_BORDER_RADIUS,
} = Constants;

import objAttributes from './attributes';
import TabPanelControl from '../../controls/tab-panel';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		style,
		titleColor,
		descriptionColor,
		designationColor,
		boxBgColor,
		boxBgHoverColor,
		activeRatingColor,
		inactiveRatingColor,
		textAlign,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<InspectorControls>
			<Fragment>
				<PanelBody
					title={__('Layout Style', 'bdt-review-blocks')}
					initialOpen={true}
				>
					<SelectControl
						label={__('Select Layout Style', 'bdt-review-blocks')}
						value={style}
						options={[
							{
								label: __('Style One', 'bdt-review-blocks'),
								value: 'style-1',
							},
							{
								label: __('Style Two', 'bdt-review-blocks'),
								value: 'style-2',
							},
							{
								label: __('Style Three', 'bdt-review-blocks'),
								value: 'style-3',
							},
						]}
						onChange={(size) => setAttributes({ style: size })}
					/>
				</PanelBody>
				<PanelBody
					title={__('Column Settings', 'bdt-review-blocks')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Column Number', 'bdt-review-blocks')}
						controlName={GRID_COLUMNS}
						objAttrs={objAttrs}
						noUnits={true}
						min={1}
						max={4}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Column Gap', 'bdt-review-blocks')}
						controlName={GRID_GAP}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Row Gap', 'bdt-review-blocks')}
						controlName={ROW_GAP}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
				</PanelBody>
				<PanelBody
					title={__('Item Box', 'bdt-review-blocks')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Padding', 'bdt-review-blocks')}
						controlName={ITEM_PADDING}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Border Radius', 'bdt-review-blocks')}
						controlName={ITEM_BORDER_RADIUS}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<TabPanelControl
						normalComponents={
							<Fragment>
								<ColorControl
									label={__(
										'Background Color',
										'bdt-review-blocks'
									)}
									color={boxBgColor}
									colorName="boxBgColor"
									onChange={setAttributes}
								/>
							</Fragment>
						}
						hoverComponents={
							<Fragment>
								<ColorControl
									label={__(
										'Background Color',
										'bdt-review-blocks'
									)}
									color={boxBgHoverColor}
									colorName="boxBgHoverColor"
									onChange={setAttributes}
								/>
							</Fragment>
						}
					/>
				</PanelBody>
				<PanelBody
					title={__('Image Settings', 'bdt-review-blocks')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Image Size', 'bdt-review-blocks')}
						controlName={IMAGE_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={200}
					/>
				</PanelBody>
				<PanelBody
					title={__('Content', 'bdt-review-blocks')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Name Font Size', 'bdt-review-blocks')}
						controlName={NAME_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Designation Font Size', 'bdt-review-blocks')}
						controlName={DESG_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Description Font Size', 'bdt-review-blocks')}
						controlName={DESC_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<Alignment
						label={__('Alignment', 'bdt-review-blocks')}
						attribute={textAlign}
						attributeName="textAlign"
						setAttributes={setAttributes}
						options={aligns}
					/>
					<CardDivider />
					<ColorControl
						label={__('Title Color', 'bdt-review-blocks')}
						color={titleColor}
						colorName="titleColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Designation Color', 'bdt-review-blocks')}
						color={designationColor}
						colorName="designationColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Description Color', 'bdt-review-blocks')}
						color={descriptionColor}
						colorName="descriptionColor"
						onChange={setAttributes}
					/>
				</PanelBody>
				<PanelBody
					title={__('Rating', 'bdt-review-blocks')}
					initialOpen={false}
				>
					<ColorControl
						label={__('Active Rating Color', 'bdt-review-blocks')}
						color={activeRatingColor}
						colorName="activeRatingColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Inactive Rating Color', 'bdt-review-blocks')}
						color={inactiveRatingColor}
						colorName="inactiveRatingColor"
						onChange={setAttributes}
					/>
				</PanelBody>
			</Fragment>
		</InspectorControls>
	);
};

export default Inspector;
