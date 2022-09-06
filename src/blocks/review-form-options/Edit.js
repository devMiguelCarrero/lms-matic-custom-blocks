import './style.editor.scss';

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const EditForm = (props) => {
	const { attributes } = props;
	const { className } = attributes; 
	const classes = classNames(className, {
		'lms-review-form-options': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<h3 className="text-center">
				{__('Review form options', 'lms-matic-custom-blocks')}
			</h3>
		</div>
	);
};
export default EditForm;
