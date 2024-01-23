import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
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
			<p className="lms-pricing-tabs__price">{price}</p>
			<InnerBlocks.Content />
		</div>
	);
}
