import { __ } from '@wordpress/i18n';
import ProductInfo from './components/ProductInfo';

const PostCarouselApp = ({ dataPosts }) => {
	return <ProductInfo dataPosts={dataPosts} />;
};
export default PostCarouselApp;
