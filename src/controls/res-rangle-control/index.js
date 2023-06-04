import {
	BaseControl,
	RangeControl,
	Flex,
	FlexItem,
	Button,
} from '@wordpress/components';
import ResBtn from '../res-btn';

import './style.scss';

const ResRangleControl = ({
	label,
	controlName,
	objAttrs,
	noUnits,
	units,
	min,
	max,
}) => {
	const { attributes, setAttributes } = objAttrs;
	const { resMode } = attributes;

	const {
		[`${controlName}DeskRange`]: deskRange,
		[`${controlName}TabRange`]: tabRange,
		[`${controlName}MobRange`]: mobRange,
		[`${controlName}Unit`]: unit,
	} = attributes;

	if (!units) units = units || ['px', 'em', 'rem'];

	return (
		<div className="bdt-res-rangle-control">
			<Flex align="flex-start">
				<FlexItem>
					<BaseControl id="res-label" label={label}>
						<ResBtn
							resMode={resMode}
							setAttributes={setAttributes}
						/>
					</BaseControl>
				</FlexItem>
				<FlexItem>
					{!noUnits && (
						<div className="units-wrapper">
							{units &&
								units.map((u, index) => {
									return (
										<Button
											className="unit-btn"
											variant={
												unit === u
													? 'primary'
													: 'secondary'
											}
											key={index}
											onClick={() =>
												setAttributes({
													[`${controlName}Unit`]: u,
												})
											}
										>
											{u}
										</Button>
									);
								})}
						</div>
					)}
				</FlexItem>
			</Flex>
			<div className="res-controls">
				{resMode === 'Desktop' && (
					<div className="single-rangle">
						<RangeControl
							value={deskRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}DeskRange`]: value,
								})
							}
							min={min}
							max={max}
							allowReset={true}
							resetFallbackValue=""
						/>
					</div>
				)}
				{resMode === 'Tablet' && (
					<div className="single-rangle">
						<RangeControl
							value={tabRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}TabRange`]: value,
								})
							}
							min={min}
							max={max}
						/>
					</div>
				)}
				{resMode === 'Mobile' && (
					<div className="single-rangle">
						<RangeControl
							value={mobRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}MobRange`]: value,
								})
							}
							min={min}
							max={max}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ResRangleControl;
