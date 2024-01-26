import { useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SavePostCarousel = (props) => {
	const { attributes, setAttributes } = props;
	const { className, numberOfPosts, include } = attributes;

	const classes = classNames(className, {
		'lms-post-carousel': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div
			{...blockProps}
			data-posts={btoa(JSON.stringify({ numberOfPosts, include }))}
		></div>
	);
};
export default SavePostCarousel;
