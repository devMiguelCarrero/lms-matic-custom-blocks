import './style.editor.scss';

import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const EditSectionTitle = (props) => {
	const { attributes, setAttributes } = props;
	const { className, title } = attributes;
	const classes = classNames(className, {
		'lms-section-title-area': true,
	});

	const onChangeTitle = (title) => {
		setAttributes({ title });
	};

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<RichText
				className="lms-section-title-area__title"
				tagName="h2"
				onChange={onChangeTitle}
				value={title}
				placeholder={__('Section Title', textDomain)}
				formattingControl={['bold', 'italic']}
			/>
		</div>
	);
};
export default EditSectionTitle;
