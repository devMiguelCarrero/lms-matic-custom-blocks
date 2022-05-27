import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Axios from 'axios';
import { URLs, Colors } from '../../../../block-data/block-data';
import Slider from 'react-slick';
import { useState, useEffect } from '@wordpress/element';
import LogoLoader from '../../../../components/loaders/LogoLoader';

const ezPostCarousel = ({ postData }) => {
	const [posts, setPosts] = useState(null);

	useEffect(async () => {
		try {
			const response = await Axios.get(
				`${URLs.main_url}wp-json/wp/v2/testimonial?per_page=${postData.numberOfPosts}&_embed`
			);
			console.log(response.data);
			setPosts(response.data);
			props.onLessonsLoad(response.data);
		} catch (error) {
			console.log(error);
		}
	}, [setPosts]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
	};

	return (
		<>
			{posts ? (
				<Slider {...settings}>
					{posts.map((post) => {
						return (
							<div className="carousel-post-container">
								<p className="carousel-post-container__testimonial">
									{post.content.rendered.replace(
										/(<([^>]+)>)/gi,
										''
									)}
								</p>
								{post.meta['testimonial-witness'] && (
									<h3 className="carousel-post-container__witness">
										{post.meta['testimonial-witness']}
									</h3>
								)}
								{post.meta['testimonial-witness-charge'] && (
									<p className="carousel-post-container__witness-charge">
										{
											post.meta[
												'testimonial-witness-charge'
											]
										}
									</p>
								)}
							</div>
						);
					})}
				</Slider>
			) : (
				<div className="lms-post-carousel__loader">
					<LogoLoader />
				</div>
			)}
		</>
	);
};
export default ezPostCarousel;
