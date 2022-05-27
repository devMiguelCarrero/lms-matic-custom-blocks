import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, QueryControls } from '@wordpress/components';
import LogoLoader from '../../components/loaders/LogoLoader';
import { useSelect } from '@wordpress/data';
import { textDomain, Colors } from '../../block-data/block-data';
import Slider from 'react-slick';
import classNames from 'classnames';

const EditPostCarousel = (props) => {
	const { attributes, setAttributes } = props;
	const { className, numberOfPosts } = attributes;

	const classes = classNames(className, {
		'lms-post-carousel': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const onNumberOfItemsChange = (number) => {
		setAttributes({ numberOfPosts: number });
	};

	const posts = useSelect(
		(select) => {
			return select('core').getEntityRecords('postType', 'testimonial', {
				per_page: numberOfPosts,
				_embed: true,
			});
		},
		[numberOfPosts]
	);

	console.log(posts);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
	};
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<QueryControls
						numberOfItems={numberOfPosts}
						onNumberOfItemsChange={onNumberOfItemsChange}
						maxItems={24}
						minItems={2}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{posts ? (
					<Slider {...settings}>
						{posts.map((post) => {
							return (
								<div className="carousel-post-container">
									<p>
										{post.content.rendered.replace(
											/(<([^>]+)>)/gi,
											''
										)}
									</p>
								</div>
							);
						})}
					</Slider>
				) : (
					<div className="lms-post-carousel__loader">
						<LogoLoader />
					</div>
				)}
			</div>
		</>
	);
};
export default EditPostCarousel;
