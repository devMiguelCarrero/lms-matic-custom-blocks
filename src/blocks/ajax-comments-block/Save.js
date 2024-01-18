import { RichText, useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveSectionTitle = (props) => {
	const { attributes } = props;
	const { className, title, firstText, secondText, thirdText } = attributes;
	const classes = classNames(className, {
		'lms-comments-section': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<div>
				<p className="text-center">Comment section</p>
			</div>
		</div>
	);
};
export default SaveSectionTitle;
