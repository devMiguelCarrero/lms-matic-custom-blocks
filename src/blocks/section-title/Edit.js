import './style.editor.scss';

import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const EditSectionTitle = (props) => {
	const { attributes, setAttributes } = props;
	const { className, title, uniqueID } = attributes;
	const classes = classNames(className, {
		'lms-section-title-area': true,
	});

	const onChangeTitle = (title) => {
		setAttributes({ title });
	};

	const onChangeID = (uniqueID) => {
		setAttributes({ uniqueID });
	};

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label={__('ID', 'lms-matic-custom-blocks')}
						onChange={onChangeID}
						value={uniqueID}
					/>
				</PanelBody>
			</InspectorControls>
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
