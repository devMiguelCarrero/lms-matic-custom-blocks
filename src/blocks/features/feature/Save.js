import { useBlockProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveFeature = ({ attributes }) => {
	const { title, description, alt, url, id, className } = attributes;

	const classes = classNames(className, {
		'col-6 col-md-4': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<div className="lms-features__feature">
				{url && (
					<img
						src={url}
						alt={alt}
						className={id ? `wp-image-${id}` : null}
					/>
				)}
				<p>
					{title && (
						<RichText.Content
							tagName="span"
							className="feature-title"
							value={title}
						/>
					)}
					{description && (
						<RichText.Content
							tagName="span"
							className="feature-description"
							value={description}
						/>
					)}
				</p>
			</div>
		</div>
	);
};
export default SaveFeature;
