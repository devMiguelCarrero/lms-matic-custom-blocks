import { useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const SaveAddToCart = (props) => {
	const { attributes, setAttributes } = props;
	const { className, selectedProduct } = attributes;

	const classes = classNames(className, {
		'lms-add-to-cart-button': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<div {...blockProps} data-posts={JSON.stringify({ selectedProduct })}>
			<p>add to cart</p>
		</div>
	);
};
export default SaveAddToCart;
