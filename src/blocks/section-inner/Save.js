import "./style.scss";
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveTestBlock2 = (props) => {
	const { attributes } = props;
	const { className, title } = attributes;
	const classes = classNames(className, {
		'lms-section__inner': true,
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
export default SaveTestBlock2;
