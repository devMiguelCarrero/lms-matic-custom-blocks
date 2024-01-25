import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classNames from 'classnames';
import { formatearPrecio } from '../../../shared/util/numberFormat';

export default function SavePricingTab({ attributes }) {
	const { className, price, color, description, title, paymentInfo } =
		attributes;

	const classes = classNames(className, {
		'lms-pricing-tabs__tab': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<div
				style={{ backgroundColor: color }}
				className="lms-pricing-tabs__title"
			>
				<h4 className="lms-pricing-heading">{title}</h4>
				<small className="lms-pricing-description">
					({description})
				</small>
			</div>
			<InnerBlocks.Content />
			<p style={{ color }} className="lms-pricing-tabs__price">
				{formatearPrecio(price)}
			</p>
			<div className="lms-pricing-tabs__payment">
				<div dangerouslySetInnerHTML={{ __html: paymentInfo }} />
			</div>
		</div>
	);
}
