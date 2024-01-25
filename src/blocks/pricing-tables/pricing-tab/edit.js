import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ColorPalette,
	TextareaControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { textDomain, Colors } from '../../../block-data/block-data';
import classNames from 'classnames';
import { formatearPrecio } from '../../../shared/util/numberFormat';

const EditPricingTab = (props) => {
	const { attributes, setAttributes } = props;
	const { className, title, price, description, color, paymentInfo } =
		attributes;

	const classes = classNames(className, {
		'lms-pricing-tabs__tab': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const onChangePrice = (newPrice) => {
		setAttributes({ price: newPrice });
	};

	const onChangeColor = (newColor) => {
		setAttributes({ color: newColor });
	};

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};

	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};

	const onChangePaymentInfo = (newInfo) => {
		setAttributes({ paymentInfo: newInfo });
	};

	const TEMPLATE = [
		[
			'core/list',
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
						label={__('Title', 'lms-matic-custom-blocks')}
						onChange={onChangeTitle}
						value={title}
					/>
					<TextControl
						label={__('Description', 'lms-matic-custom-blocks')}
						onChange={onChangeDescription}
						value={description}
					/>
					<TextControl
						label={__('Price', 'lms-matic-custom-blocks')}
						onChange={onChangePrice}
						value={price}
					/>
					<TextareaControl
						label={__('Payment Info', 'lms-matic-custom-blocks')}
						onChange={onChangePaymentInfo}
						value={paymentInfo}
					/>
				</PanelBody>
				<PanelBody>
					<ColorPalette
						label={__('Background', 'team-members')}
						value={color}
						disableCustomColors={false}
						colors={Object.keys(Colors).map((item) => ({
							name: item,
							color: Colors[item],
						}))}
						onChange={onChangeColor}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				style={{ backgroundColor: color }}
				className="lms-pricing-tabs__title"
			>
				<h4 className="lms-pricing-heading">{title}</h4>
				<small className="lms-pricing-description">
					({description})
				</small>
			</div>
			<InnerBlocks template={TEMPLATE} templateLock="all" />
			<p
				style={{ color }}
				key="lms-pricing-tab-price"
				className="lms-pricing-tabs__price"
				formattingControl={['bold', 'italic']}
			>
				{formatearPrecio(price)}
			</p>
			<div className="lms-pricing-tabs__payment">
				<div dangerouslySetInnerHTML={{ __html: paymentInfo }} />
			</div>
		</div>
	);
};
export default EditPricingTab;
