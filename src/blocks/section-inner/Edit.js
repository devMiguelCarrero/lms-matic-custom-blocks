import './style.editor.scss';

import {
	InnerBlocks,
	useBlockProps,
	ButtonBlockerAppender,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const EditTestBlock2 = (props) => {
	const { attributes } = props;
	const { className } = attributes;
	const classes = classNames(className, {
		'lms-section__inner': true,
	});
	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks template={[[`core/paragraph`]]}>
				<ButtonBlockerAppender />
			</InnerBlocks>
		</div>
	);
};
export default EditTestBlock2;
