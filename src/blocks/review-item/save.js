/**
 * WordPress dependencies
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		photo,
		clientComment,
		clientDesg,
		clientName,
		showRating,
		rating,
		style,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${style}`,
			})}
		>
			{photo && (
				<div className="bdt-image-wrap">
					<img
						className="bdt-img"
						src={photo.url}
						alt={photo.alt ? photo.alt : clientName}
					/>
				</div>
			)}
			<div className="bdt-content">
				{clientName && (
					<RichText.Content
						tagName="h4"
						className={'bdt-name'}
						value={clientName}
					/>
				)}
				{clientDesg && (
					<RichText.Content
						tagName="span"
						className={'bdt-designation'}
						value={clientDesg}
					/>
				)}
				{clientComment && (
					<RichText.Content
						tagName="p"
						className={'bdt-desc'}
						value={clientComment}
					/>
				)}
				{
					<div className="bdt-review-icon">
						<div
							className="bdt-rating"
							data-rate-value={showRating && rating}
						></div>
					</div>
				}
			</div>
		</div>
	);
}
