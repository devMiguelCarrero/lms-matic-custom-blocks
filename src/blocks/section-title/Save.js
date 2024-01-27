import { RichText, useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveSectionTitle = (props) => {
	const { attributes } = props;
	const { className, title, uniqueID } = attributes;
	const classes = classNames(className, {
		'lms-section-title-area': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				className="lms-section-title-area__title"
				tagName="h2"
				id={uniqueID}
				value={title}
			/>
		</div>
	);
};
export default SaveSectionTitle;
