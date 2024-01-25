import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function Save({ attributes }) {
	const { className, title } = attributes;

	const classes = classNames(className, {
		'lms-accordion-tabs__tab': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				className="tab-title"
				tagName="h4"
				value={title}
			/>
			<div className="tab-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
