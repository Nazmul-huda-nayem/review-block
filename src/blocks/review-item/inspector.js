/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
	Card,
	CardHeader,
	CardBody,
	ToggleControl,
	RangeControl,
	TextControl,
	TextareaControl,
	PanelBody,
	Button,
	BaseControl,
	SelectControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

const Inspector = ({ attributes, setAttributes }) => {
	const {
		showRating,
		rating,
		clientComment,
		clientName,
		clientDesg,
		photo,
		titleTag,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__('Content', 'bdt-review-blocks')}
				initialOpen={true}
			>
				<TextControl
					label={__('Reviewer Name', 'bdt-review-blocks')}
					value={clientName}
					onChange={(value) =>
						setAttributes({
							clientName: value,
						})
					}
				/>
				<SelectControl
					label={__('Select Title Tag', 'bdt-review-blocks')}
					options={[
						{ label: __('H1', 'bdt-review-blocks'), value: 'h1' },
						{ label: __('H2', 'bdt-review-blocks'), value: 'h2' },
						{ label: __('H3', 'bdt-review-blocks'), value: 'h3' },
						{ label: __('H4', 'bdt-review-blocks'), value: 'h4' },
						{ label: __('H5', 'bdt-review-blocks'), value: 'h5' },
						{ label: __('H6', 'bdt-review-blocks'), value: 'h6' },
					]}
					onChange={(value) => {
						setAttributes({ titleTag: value });
					}}
					value={titleTag}
				/>
				<TextControl
					label={__('Reviewer Designation', 'bdt-review-blocks')}
					value={clientDesg}
					onChange={(value) =>
						setAttributes({
							clientDesg: value,
						})
					}
				/>
				<TextareaControl
					label={__('Reviewer Comment', 'bdt-review-blocks')}
					value={clientComment}
					onChange={(value) =>
						setAttributes({
							clientComment: value,
						})
					}
				/>
				<BaseControl
					id="reviewer-photo"
					label={__('Reviewer Photo', 'bdt-review-blocks')}
				/>
				{photo ? (
					<div className="bdt-image-wrap">
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : clientName}
						/>
					</div>
				) : (
					<MediaUpload
						onSelect={(media) =>
							setAttributes({
								photo: media,
							})
						}
						allowedTypes={['image']}
						value={photo && photo.id}
						render={({ open }) => (
							<Button
								onClick={open}
								variant="secondary"
								icon={'cloud-upload'}
							>
								Upload Client Image
							</Button>
						)}
					/>
				)}
			</PanelBody>
			<Card>
				<CardHeader>
					<strong>{__('Client Rating', 'bdt-review-blocks')}</strong>
				</CardHeader>
				<CardBody>
					<ToggleControl
						label={__('Show Rating', 'bdt-review-blocks')}
						checked={showRating}
						onChange={() =>
							setAttributes({
								showRating: !showRating,
							})
						}
					/>
					{showRating && (
						<Fragment>
							<RangeControl
								label={__('Rating', 'bdt-review-blocks')}
								value={rating}
								onChange={(value) =>
									setAttributes({ rating: value })
								}
								min={1}
								max={5}
								step={0.1}
							/>
						</Fragment>
					)}
				</CardBody>
			</Card>
		</InspectorControls>
	);
};

export default Inspector;
