/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	BlockControls,
} from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// External dependencies
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, context } = props;
	const {
		style,
		photo,
		clientComment,
		clientDesg,
		clientName,
		showRating,
		rating,
		titleTag,
	} = attributes;

	setAttributes({
		style: context['bdt/style'],
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			{photo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									photo: media,
								})
							}
							allowedTypes={['image']}
							value={photo && photo.id}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									label={__(
										'Edit Photo',
										'bdt-review-blocks'
									)}
									icon="edit"
								/>
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}
			<div
				{...useBlockProps({
					className: style,
				})}
			>
				<div className="bdt-container">
					<div className="bdt-review-grid-wrap">
						<div className="bdt-item">
							{photo ? (
								<div className="bdt-image-wrap">
									<img
										className="bdt-img"
										src={photo.url}
										alt={photo.alt || clientName}
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
											icon="cloud-upload"
										>
											{__(
												'Upload Photo',
												'bdt-review-blocks'
											)}
										</Button>
									)}
								/>
							)}
							<div className="bdt-content">
								<RichText
									tagName={titleTag}
									className="bdt-name"
									value={clientName}
									onChange={(value) =>
										setAttributes({ clientName: value })
									}
									placeholder={__(
										'Name…',
										'bdt-review-blocks'
									)}
								/>
								<RichText
									tagName="span"
									className="bdt-designation"
									value={clientDesg}
									onChange={(value) =>
										setAttributes({ clientDesg: value })
									}
									placeholder={__(
										'Designation…',
										'bdt-review-blocks'
									)}
								/>
								<RichText
									tagName="p"
									className="bdt-desc"
									value={clientComment}
									onChange={(value) =>
										setAttributes({ clientComment: value })
									}
									placeholder={__(
										'Write client comment',
										'bdt-review-blocks'
									)}
								/>
								{showRating && (
									<div className="bdt-review-icon">
										<Rater
											total={5}
											rating={rating}
											interactive={false}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
