import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import LogoLoader from '../../components/loaders/LogoLoader';
import { select, useSelect } from '@wordpress/data';
import { textDomain, Colors } from '../../block-data/block-data';
import classNames from 'classnames';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const EditAddToCart = (props) => {
	const { attributes, setAttributes } = props;
	const { className, selectedProduct } = attributes;
	const [selectedProducts, setSelectedProducts] = useState();
	const [productData, setProductData] = useState(null);

	const classes = classNames(className, {
		'lms-add-to-cart-button': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const onSelectedProductChange = (product) => {
		setAttributes({ selectedProduct: parseInt(product) });
	};

	const products = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'product', {
			per_page: -1,
			_embed: true,
		});
	}, []);

	useEffect(() => {
		if (products) {
			setSelectedProducts(
				[
					{
						label: __(
							'Select a product...',
							'lms-matic-custom-blocks'
						),
						value: 0,
					},
				].concat(
					products.map((product) => {
						return {
							label: product.title.rendered,
							value: product.id,
						};
					})
				)
			);
		}
	}, [products]);

	useEffect(() => {
		if (selectedProduct === 0) {
			setProductData(null);
			return;
		}

		if (selectedProduct && products) {
			setProductData(
				products.find((product) => product.id === selectedProduct)
			);
		}
	}, [products, selectedProduct]);

	console.log(productData);

	return (
		<>
			<InspectorControls>
				<PanelBody>
					{selectedProducts ? (
						<SelectControl
							label={__('Product', 'lms-matic-custom-blocks')}
							value={selectedProduct}
							options={selectedProducts}
							onChange={onSelectedProductChange}
						/>
					) : (
						<p>
							{__(
								'Loading products...',
								'lms-matic-custom-blocks'
							)}
						</p>
					)}
				</PanelBody>
			</InspectorControls>
			{products && productData ? (
				<div {...blockProps}>
					<h4 className="text-center">
						{productData.title.rendered}
					</h4>
					<button className="lms-button lms-button--mini">
						Add to cart Button
					</button>
				</div>
			) : (
				<div {...blockProps}>
					<h4>
						{__(
							'Select a product on side menu',
							'lms-matic-custom-blocks'
						)}
					</h4>
				</div>
			)}
		</>
	);
};
export default EditAddToCart;
