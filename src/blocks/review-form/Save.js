import './style.scss';

import { useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveForm = (props) => {
	const { attributes } = props;
	const { className } = attributes;

	const classes = classNames(className, {
		'lms-review-form': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return <div {...blockProps}></div>;
};
export default SaveForm;
