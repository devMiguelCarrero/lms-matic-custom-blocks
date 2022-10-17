import { useState } from '@wordpress/element';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { __ } from '@wordpress/i18n';
import Axios from 'axios';

import { URLs } from '../../../block-data/block-data';

const AddToCartButton = ({ product, product_id }) => {
	const [isAdding, setIsAdding] = useState(false);
	const [added, setAdded] = useState(false);
	const [error, setError] = useState();
	const [addedMessage, setAddedMessage] = useState('');

	const addToCartHandle = async () => {
		if (product_id !== 0) {
			setIsAdding(true);
			setError(null);

			const params = new URLSearchParams();
			params.append('product', product_id);
			params.append('action', 'lmscx_add_product_to_cart');

			try {
				const response = await Axios.post(URLs.ajax_url, params);
				console.log(response);
				setAdded(true);
				setAddedMessage(response.data.message);
			} catch (e) {
				setError(e.message);
			}

			setIsAdding(false);
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
			{!added && (
				<>
					<PriceArea />
					<button
						className="lms-button add-to-cart-button"
						disabled={isAdding}
						onClick={addToCartHandle}
					>
						{!isAdding && (
							<>
								{__(
									'Añadir al carrito',
									'lms-matic-custom-blocks'
								)}{' '}
								<FontAwesomeIcon icon={faCartArrowDown} />
							</>
						)}
						{isAdding && (
							<>{__('Añadiendo...', 'lms-matic-custom-blocks')}</>
						)}
					</button>
					{error && (
						<p className="text-center message-log error-log">
							{error}
						</p>
					)}
				</>
			)}
			{added && (
				<>
					<p className="text-center message-log success-log">
						{addedMessage}
					</p>
					<a
						href={URLs.checkout}
						className="lms-button add-to-cart-button"
					>
						{__('Concretar compra', 'lms-matic-custom-blocks')}
					</a>
				</>
			)}
		</div>
	);
};
export default AddToCartButton;
