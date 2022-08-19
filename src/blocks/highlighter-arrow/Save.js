import './style.scss';

import { useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

import Icon from './components/icon';

const SaveArrow = (props) => {
	const { attributes } = props;
	const { className } = attributes;

	const classes = classNames(className, {
		'lms-highlighter-arrow': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<Icon />
		</div>
	);
};
export default SaveArrow;
