import './style.editor.scss';

import { useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

import Icon from './components/icon';

const EditArrow = (props) => {
	const { attributes } = props;
	const { className } = attributes;
	const classes = classNames(className, {
		'lms-highlighter-arrow': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<Icon />
		</div>
	);
};
export default EditArrow;
