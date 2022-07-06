import './style.editor.scss';

import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const EditCallToAction = (props) => {
	const { attributes, setAttributes } = props;
	const { className, title, firstText, secondText, thirdText } = attributes;
	const classes = classNames(className, {
		'lms-jumbo-call-to-action': true,
	});

	const onChangeTitle = (title) => {
		setAttributes({ title });
	};

	const onChangeFirstText = (firstText) => {
		setAttributes({ firstText });
	};

	const onChangeSecondText = (secondText) => {
		setAttributes({ secondText });
	};

	const onChangeThirdText = (thirdText) => {
		setAttributes({ thirdText });
	};

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<div className="row">
				<div className="col-12 col-lg-6">
					<RichText
						className="lms-jumbo-call-to-action__title"
						tagName="h2"
						onChange={onChangeTitle}
						value={title}
						placeholder={__('Action Title', textDomain)}
						formattingControl={['bold', 'italic']}
					/>
				</div>
				<div className="col-12 col-lg-6">
					<ul className="lms-jumbo-call-to-action__list">
						<RichText
							key="list-item-1"
							className="list-item-1"
							tagName="li"
							formattingControl={['bold', 'italic']}
							value={firstText}
							placeholder={__('Action first feature', textDomain)}
							onChange={onChangeFirstText}
						/>
						<RichText
							tagName="li"
							key="list-item-2"
							className="list-item-2"
							formattingControl={['bold', 'italic']}
							value={secondText}
							placeholder={__(
								'Action second feature',
								textDomain
							)}
							onChange={onChangeSecondText}
						/>
						<RichText
							tagName="li"
							key="list-item-3"
							className="list-item-3"
							formattingControl={['bold', 'italic']}
							value={thirdText}
							placeholder={__('Action third feature', textDomain)}
							onChange={onChangeThirdText}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default EditCallToAction;
