import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, QueryControls, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import LogoLoader from '../../components/loaders/LogoLoader';
import { useSelect } from '@wordpress/data';
import { textDomain, Colors } from '../../block-data/block-data';
import Slider from 'react-slick';
import classNames from 'classnames';

import './style.editor.scss';

const EditPostCarousel = (props) => {
	const { attributes, setAttributes } = props;
	const { className, numberOfPosts, include } = attributes;

	const classes = classNames(className, {
		'lms-post-carousel': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const onNumberOfItemsChange = (number) => {
		setAttributes({ numberOfPosts: number });
	};

	const addPostToIncludes = (post) => {
		if (!include.includes(post)) {
			setAttributes({ include: [...include, post] });
		}
	};

	const removePostFromIncludes = (post) => {
		setAttributes({
			include: [...include.slice(0, post), ...include.slice(post + 1)],
		});
	};

	const allPosts = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'testimonial', {
			per_page: -1,
			_embed: true,
		});
	}, []);

	const posts = useSelect(
		(select) => {
			const params = {
				per_page: numberOfPosts,
				_embed: true,
			};
			if (include.length > 0) params.include = include;

			return select('core').getEntityRecords(
				'postType',
				'testimonial',
				params
			);
		},
		[numberOfPosts, include]
	);

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
				<PanelBody>
					{allPosts && (
						<>
							<SelectControl
								multiple
								label="Include only"
								value={include}
								options={allPosts
									.filter(
										(post) => !include.includes(post.id)
									)
									.map((post) => ({
										value: post.id,
										label: post.title.rendered,
									}))}
								onChange={(post) => {
									addPostToIncludes(parseInt(post));
								}}
							/>
							{include.length === 0 && (
								<p>
									{__(
										'There are not filtered posts',
										'lms-matic-custom-blocks'
									)}
								</p>
							)}
							{include.length > 0 && (
								<>
									<p>
										{__(
											'These posts will be included:',
											'lms-matic-custom-blocks'
										)}
									</p>
									<ul>
										{include.map((post, index) => (
											<li
												key={`include-testimonial-${post}`}
											>
												<button
													onClick={removePostFromIncludes.bind(
														this,
														index
													)}
												>
													{allPosts.findIndex(
														(srcPost) =>
															srcPost.id === post
													) !== -1 &&
														allPosts.find(
															(srcPost) =>
																srcPost.id ===
																post
														).title.rendered}
												</button>
											</li>
										))}
									</ul>
								</>
							)}
						</>
					)}
					{!allPosts && (
						<p>{__('Loading...', 'lms-matic-custom-blocks')}</p>
					)}
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
