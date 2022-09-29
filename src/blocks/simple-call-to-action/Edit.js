import './style.editor.scss';

import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const EditSimpleCallToAction = (props) => {
	const { attributes, setAttributes } = props;
	const { className, title, complementaryTitle } = attributes;
	const classes = classNames(className, {
		'lms-simple-call-to-action': true,
	});

	const onChangeTitle = (title) => {
		setAttributes({ title });
	};

	const onChangeComplementary = (complementaryTitle) => {
		setAttributes({ complementaryTitle });
	};

	const blockProps = useBlockProps({
		className: classes,
	});
	
	return (
		<>
			<div {...blockProps}>
				<h3 className="lms-simple-call-to-action__title">
					<RichText
						className="lms-simple-call-to-action__title__main"
						tagName="span"
						onChange={onChangeTitle}
						value={title}
						placeholder={__('Call to Action Title', textDomain)}
						formattingControl={[]}
					/>
					<RichText
						className="lms-simple-call-to-action__title__complement"
						tagName="span"
						formattingControl={[]}
						value={complementaryTitle}
						placeholder={__(
							'Call to Action complement',
							textDomain
						)}
						onChange={onChangeComplementary}
					/>
				</h3>
			</div>
		</>
	);
};
export default EditSimpleCallToAction;
