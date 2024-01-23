import './style.editor.scss';

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const EditCallToAction = (props) => {
	const { attributes, setAttributes } = props;
	const { className, tabs } = attributes;
	const classes = classNames(className, {
		'lms-pricing-tabs': true,
	});

	const onChangeTabs = (newTabs) => {
		setAttributes({ tabs: newTabs });
	};

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Tabs', 'lms-matic-custom-blocks')}
						min={1}
						max={6}
						onChange={onChangeTabs}
						value={tabs}
					/>
				</PanelBody>
			</InspectorControls>
			<ul className="lms-pricing-tabs__list-tabs">
				<InnerBlocks
					allowedBlocks={[`${textDomain}/pricing-tab`]}
					template={[
						[`${textDomain}/pricing-tab`],
						[`${textDomain}/pricing-tab`],
						[`${textDomain}/pricing-tab`],
					]}
				/>
			</ul>
		</div>
	);
};
export default EditCallToAction;
