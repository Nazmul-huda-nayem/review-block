/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Flex,
	FlexItem,
	FlexBlock,
	Button,
	ColorPicker,
	ColorIndicator,
	Popover,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './style.scss';

/**
 * Color Control
 */

const ColorControl = ({ label, color, onChange, colorName }) => {
	const [showColorPanel, setShowColorPanel] = useState(false);
	return (
		<div className="bdt-color-control-wrapper">
			<style>
				{`
					.bdt-color-control-wrapper .components-base-control__label, .bdt-color-control-wrapper .components-base-control__field, .bdt-color-control-wrapper .components-base-control {
						margin-bottom: 0 !important;
					}
				`}
			</style>
			<Flex
				justify={{
					justifyContent: 'flex-end',
				}}
				gap={0}
			>
				<FlexBlock>
					<BaseControl
						id="color-control"
						label={label ? label : __('Color', 'bdt-review-blocks')}
					/>
				</FlexBlock>
				<FlexItem>
					<Button
						className="bdt-color-control"
						onClick={() => setShowColorPanel(true)}
					>
						<ColorIndicator colorValue={color} />
					</Button>
				</FlexItem>
				{showColorPanel && (
					<Popover
						position="bottom right"
						onClose={() => setShowColorPanel(false)}
						onFocusOutside={() => setShowColorPanel(false)}
					>
						<BaseControl>
							<ColorPicker
								color={color}
								disableAlpha={false}
								onChangeComplete={(value) => {
									onChange({ [colorName]: value.hex });
								}}
							/>
						</BaseControl>
						<button
							className="bdt-clear-btn"
							onClick={() => onChange({ [colorName]: '' })}
						>
							{__('Clear', 'bdt-review-blocks')}
						</button>
					</Popover>
				)}
			</Flex>
		</div>
	);
};

export default ColorControl;
