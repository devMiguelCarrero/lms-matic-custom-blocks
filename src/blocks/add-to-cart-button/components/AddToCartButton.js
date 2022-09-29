import { useState } from '@wordpress/element';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { __ } from '@wordpress/i18n';

const AddToCartButton = ({ product, product_id }) => {
  const [isAdding, setIsAdding] = useState(false);

	const addToCartHandle = async () => {
		if (product_id !== 0) {
		}
	};
	let PriceArea = () => {
		return (
			<h6 className="text-center mb-1 lms-add-to-cart-button__button-container__title">{`${new Intl.NumberFormat(
				'en-US',
				{
					style: 'currency',
					currency: product.currency,
				}
			).format(product.regular_price)}`}</h6>
		);
	};

	if (product.sale_price !== 0) {
		PriceArea = () => {
			return (
				<h6 className="text-center mb-1 lms-add-to-cart-button__button-container__title">
					<span className="price regular-price">{`${new Intl.NumberFormat(
						'en-US',
						{
							style: 'currency',
							currency: product.currency,
						}
					).format(product.regular_price)}`}</span>
					<span className="price sale-price">{`${new Intl.NumberFormat(
						'en-US',
						{
							style: 'currency',
							currency: product.currency,
						}
					).format(product.sale_price)}`}</span>
				</h6>
			);
		};
	}

	return (
		<div className="lms-add-to-cart-button__button-container">
			<PriceArea />
			<button className="lms-button add-to-cart-button">
				{__('Añadir al carrito', 'lms-matic-custom-blocks')}{' '}
				<FontAwesomeIcon icon={faCartArrowDown} />
			</button>
		</div>
	);
};
export default AddToCartButton;
