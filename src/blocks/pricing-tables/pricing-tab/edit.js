import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
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

	return (
		<div {...blockProps}>
			<RichText
				key="lms-pricing-tab-price"
				className="lms-pricing-tabs__price"
				tagName="p"
				formattingControl={['bold', 'italic']}
				value={price}
				placeholder={__('1000000', textDomain)}
				onChange={onChangePrice}
			/>
			<InnerBlocks template={[['core/list']]} templateLock="all" />
		</div>
	);
};
export default EditPricingTab;
