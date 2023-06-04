/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Tab Panel Control
 */

const TabPanelControl = ({ normalComponents, hoverComponents }) => {
	return (
		<TabPanel
			className="bdt-tab-panel"
			activeClass="active-tab"
			initialTabName="bdt_review_normal"
			tabs={[
				{
					name: 'bdt_review_normal',
					title: __('Normal', 'bdt-review-blocks'),
					className: 'bdt-tab bdt-general',
				},
				{
					name: 'bdt_review_hover',
					title: __('Hover', 'bdt-review-blocks'),
					className: 'bdt-tab bdt-style',
				},
			]}
		>
			{(tabContent) => {
				if (tabContent.name === 'bdt_review_normal') {
					return <Fragment>{normalComponents}</Fragment>;
				} else if (tabContent.name === 'bdt_review_hover') {
					return <Fragment>{hoverComponents}</Fragment>;
				}
			}}
		</TabPanel>
	);
};

export default TabPanelControl;
