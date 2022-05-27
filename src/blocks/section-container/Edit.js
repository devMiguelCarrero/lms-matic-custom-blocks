import './style.editor.scss';

import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	ButtonBlockerAppender,
} from '@wordpress/block-editor';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const EditTestBlock1 = (props) => {
	const { attributes } = props;
	const { className } = attributes;
	const classes = classNames(className, {
		'lms-section': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<section {...blockProps}>
			<InnerBlocks
				allowedBlocks={[`${textDomain}/section-inner`]}
				template={[[`${textDomain}/section-inner`]]}
			>
				<ButtonBlockerAppender />
			</InnerBlocks>
		</section>
	);
};
export default EditTestBlock1;
