import './style.editor.scss';

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

const EditCallToAction = (props) => {
	const { attributes } = props;
	const { className } = attributes;
	const classes = classNames(className, {
		'lms-comments-section': true,
	});

	const blockProps = useBlockProps({
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
export default EditCallToAction;
