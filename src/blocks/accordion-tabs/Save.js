import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function SaveAccordionTabs({ attributes }) {
	const { className } = attributes;

	const classes = classNames(className, {
		'lms-accordion-tabs': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
