import { RichText, useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveSectionTitle = (props) => {
	const { attributes } = props;
	const { className, title, firstText, secondText, thirdText } = attributes;
	const classes = classNames(className, {
		'lms-jumbo-call-to-action': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<div className="row">
				<div className="col-12 col-lg-6">
					<RichText.Content
						className="lms-jumbo-call-to-action__title"
						tagName="h2"
						value={title}
					/>
				</div>
				<div className="col-12 col-lg-6">
					<ul className="lms-jumbo-call-to-action__list">
						<RichText.Content
							key="list-item-1"
							className="list-item-1"
							tagName="li"
							value={firstText}
						/>
						<RichText.Content
							key="list-item-2"
							className="list-item-2"
							tagName="li"
							value={secondText}
						/>
						<RichText.Content
							key="list-item-3"
							className="list-item-3"
							tagName="li"
							value={thirdText}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SaveSectionTitle;
