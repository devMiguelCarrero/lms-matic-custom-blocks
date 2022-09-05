import './style.scss';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveArrow = (props) => {
	const { attributes } = props;
	const { className } = attributes;

	const classes = classNames(className, {
		'lms-features': true,
		'row': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};
export default SaveArrow;
