import './alignment.scss';

const Alignment = ({
	label,
	attribute,
	attributeName,
	setAttributes,
	options,
}) => {
	return (
		<div className="bdt-Alignment">
			<p className="bdt-label">{label}</p>
			<div className="bdt-alignment-icon-wrapper">
				{options &&
					options.map((option, index) => {
						return (
							<button
								className={`bdt-single-icon ${
									attribute === option.value ? 'active' : ''
								}`}
								onClick={() =>
									setAttributes({
										[attributeName]: option.value,
									})
								}
								key={index}
							>
								<span
									className={`dashicons dashicons-editor-${option.icon}`}
								></span>
							</button>
						);
					})}
			</div>
		</div>
	);
};

export default Alignment;
