import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function SavePricingTab({ attributes }) {
	const { className, price } = attributes;

	const classes = classNames(className, {
		'lms-pricing-tabs__tab': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				className="lms-pricing-tabs__price"
				tagName="p"
				value={price}
			/>
			<InnerBlocks.Content />
		</div>
	);
}
