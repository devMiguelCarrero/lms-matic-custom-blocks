import { useState, useEffect } from '@wordpress/element';
import Axios from 'axios';
import { __ } from '@wordpress/i18n';

import LogoLoader from '../../../components/loaders/LogoLoader';
import { PostInfo, URLs } from '../../../block-data/block-data';
import AddToCartButton from './AddToCartButton';

const ProductInfo = ({ dataPosts }) => {
	const [productInfo, setProductInfo] = useState();

	const postData = JSON.parse(atob(dataPosts));
	const selectedProduct = parseInt(postData.selectedProduct) || 0;

	useEffect(() => {
		const getSummary = async () => {
			const params = new URLSearchParams();
			params.append('assesory', PostInfo.current_post);
			params.append('action', 'lmst_get_assesory_summary');
			params.append('selected-product', selectedProduct);

			const response = await Axios.post(URLs.ajax_url, params);
			setProductInfo(response.data);
		};
		getSummary();
	}, []);

	return (
		<>
			{!productInfo && (
				<div className="lms-add-to-cart-button__loader">
					<LogoLoader />
				</div>
			)}
			{productInfo && (
				<div className="lms-tutoring-buy-card">
					{productInfo.content.data.duration && (
						<>
							<h5>
								{__(
									'Features',
									'lms-matic-tutoring-management'
								)}
							</h5>
							<ul className="lms-tutoring-buy-card__features">
								<li key="assesory-duration">
									<b>
										{__(
											'Duration:',
											'lms-matic-tutoring-management'
										)}
									</b>{' '}
									{productInfo.content.data.duration}
								</li>
								<li key="assesory-modality">
									<b>
										{__(
											'Modality:',
											'lms-matic-tutoring-management'
										)}
									</b>{' '}
									{productInfo.content.data.modality}
								</li>
								<li key="assesory-methodology">
									<b>
										{__(
											'Methodology:',
											'lms-matic-tutoring-management'
										)}
									</b>{' '}
									{productInfo.content.data.methodology}
								</li>
							</ul>
						</>
					)}

					{selectedProduct && productInfo.product !== 0 ? (
						<AddToCartButton
							product={productInfo.product}
							product_id={selectedProduct}
						/>
					) : (
						<h6 className="text-center inactive-product">
							{__(
								'Este producto no se encuentra disponible para compra',
								'lms-matic-custom-blocks'
							)}
						</h6>
					)}
				</div>
			)}
		</>
	);
};
export default ProductInfo;
