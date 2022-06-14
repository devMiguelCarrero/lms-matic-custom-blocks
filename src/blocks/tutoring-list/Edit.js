import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, QueryControls } from '@wordpress/components';
import LogoLoader from '../../components/loaders/LogoLoader';
import { useSelect } from '@wordpress/data';
import { textDomain, Colors } from '../../block-data/block-data';
import classNames from 'classnames';

const EditPostCarousel = (props) => {
	const { attributes, setAttributes } = props;
	const { className, numberOfPosts } = attributes;

	const classes = classNames(className, {
		'lms-tutoring-grid': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const onNumberOfItemsChange = (number) => {
		setAttributes({ numberOfPosts: number });
	};

	const posts = useSelect(
		(select) => {
			return select('core').getEntityRecords('postType', 'tutoring', {
				per_page: numberOfPosts,
				_embed: true,
			});
		},
		[numberOfPosts]
	);

	console.log(posts);

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
					<div className="row">
						{posts.map((post) => {
							return (
								<div className="col-6 col-md-3">
									<div className="lms-tutoring-grid__front-layer">
										<h3 className="lms-tutoring-grid__front-layer__title">
											{post.meta['tutoring-short-title']}{' '}
											<span className="title-complement">
												{
													post.meta[
														'tutoring-short-title-complement'
													]
												}
											</span>
										</h3>
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
			</div>
		</>
	);
};
export default EditPostCarousel;
