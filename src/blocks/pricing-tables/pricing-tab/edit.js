import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../../block-data/block-data';
import classNames from 'classnames';

const EditPricingTab = (props) => {
	const { attributes, setAttributes } = props;
	const { className, price } = attributes;

	const classes = classNames(className, {
		'lms-pricing-tabs__tab': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const onChangePrice = (newPrice) => {
		setAttributes({ price: newPrice });
	};

	const TEMPLATE = [
		[
			'core/list',
			{},
			[
				['core/list-item', { placeholder: __('Item 1', textDomain) }],
				['core/list-item', { placeholder: __('Item 2', textDomain) }],
				['core/list-item', { placeholder: __('Item 3', textDomain) }],
			],
		],
	];

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label={__('Price', 'team-members')}
						onChange={onChangePrice}
						value={price}
					/>
				</PanelBody>
			</InspectorControls>
			<p
				key="lms-pricing-tab-price"
				className="lms-pricing-tabs__price"
				formattingControl={['bold', 'italic']}
			>
				{price}
			</p>
			<InnerBlocks template={TEMPLATE} templateLock="all" />
		</div>
	);
};
export default EditPricingTab;
