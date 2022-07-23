import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Axios from 'axios';
import { URLs, Colors } from '../../../../block-data/block-data';
import Slider from 'react-slick';
import { useState, useEffect } from '@wordpress/element';
import LogoLoader from '../../../../components/loaders/LogoLoader';
import { stripHtml } from 'string-strip-html';

const ezTutotingList = ({ postData }) => {
	const [posts, setPosts] = useState(null);

	useEffect(async () => {
		try {
			const response = await Axios.get(
				`${URLs.main_url}wp-json/wp/v2/tutoring?per_page=${postData.numberOfPosts}&_embed`
			);
			setPosts(response.data);
		} catch (error) {
			console.log(error);
		}
	}, [setPosts]);

	return (
		<>
			{posts ? (
				<div className="row">
					{posts.map((post) => {
						return (
							<div className="col-6 col-md-3">
								<div className="lms-tutoring-grid__front-layer">
									<h3 className="lms-tutoring-grid__front-layer__title mb-3">
										<a href={post.link}>
											{post.meta['tutoring-short-title']}{' '}
											<span className="title-complement">
												{
													post.meta[
														'tutoring-short-title-complement'
													]
												}
											</span>
										</a>
									</h3>
									<small className="text-center">
										{
											stripHtml(post.excerpt.rendered)
												.result
										}
									</small>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="lms-tutoring-grid__loader">
					<LogoLoader />
				</div>
			)}
		</>
	);
};
export default ezTutotingList;
