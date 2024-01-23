import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function save({ attributes }) {
	const { tabs, className } = attributes;

	const classes = classNames(className, {
		'lms-pricing-tabs': true,
		[`has-${tabs}-tabs`]: true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<ul {...blockProps}>
			<InnerBlocks.Content />
		</ul>
	);
}
