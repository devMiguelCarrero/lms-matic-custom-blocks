import { RichText, useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveSectionTitle = (props) => {
	const { attributes } = props;
	const { className, title, complementaryTitle } = attributes;
	const classes = classNames(className, {
		'lms-simple-call-to-action': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<h3 className="lms-simple-call-to-action__title">
				<RichText.Content
					className="lms-simple-call-to-action__title__main"
					tagName="span"
					value={title}
				/>
				<RichText.Content
					className="lms-simple-call-to-action__title__complement"
					tagName="span"
					value={complementaryTitle}
				/>
			</h3>
		</div>
	);
};
export default SaveSectionTitle;
