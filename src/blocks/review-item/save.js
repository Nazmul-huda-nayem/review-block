/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

// save function
export default function save({ attributes }) {
	const {
		photo,
		clientComment,
		clientDesg,
		clientName,
		titleTag,
		showRating,
		rating,
		style,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: style,
			})}
		>
			{photo && (
				<div className="bdt-image-wrap">
					<img
						className="bdt-img"
						src={photo.url}
						alt={photo.alt || clientName}
					/>
				</div>
			)}
			<div className="bdt-content">
				{clientName && (
					<RichText.Content
						tagName={titleTag}
						className="bdt-name"
						value={clientName}
					/>
				)}
				{clientDesg && (
					<RichText.Content
						tagName="span"
						className="bdt-designation"
						value={clientDesg}
					/>
				)}
				{clientComment && (
					<RichText.Content
						tagName="p"
						className="bdt-desc"
						value={clientComment}
					/>
				)}
				{showRating && (
					<div className="bdt-review-icon">
						<div
							className="bdt-rating"
							data-rate-value={rating}
						></div>
					</div>
				)}
			</div>
		</div>
	);
}
