import { useEffect, useState, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	store as blockEditorStore,
	MediaPlaceholder,
	BlockControls,
	InspectorControls,
	MediaReplaceFlow,
	RichText,
} from '@wordpress/block-editor';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { usePrevious } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import classNames from 'classnames';
import {
	ToolbarButton,
	PanelBody,
	TextareaControl,
	Spinner,
	SelectControl,
} from '@wordpress/components';

const EditFeature = ({
	attributes,
	setAttributes,
	context,
	noticeOperations,
	noticeUI,
	isSelected,
}) => {
	const { title, description, url, alt, className } = attributes;
	const [blobURL, setBlobURL] = useState();
	const [selectedLink, setSelectedLink] = useState();

	const classes = classNames(className, {
		'col-6 col-md-4': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const titleRef = useRef();

	//manipulate image URL
	const prevURL = usePrevious(url);
	const prevIsSelected = usePrevious(isSelected);

	//Get image by id
	const imageObject = useSelect(
		(select) => {
			const { getMedia } = select('core');
			return id ? getMedia(id) : null;
		},
		[id]
	);

	//Get stored image sizes
	const imageSizes = useSelect((select) => {
		return select(blockEditorStore).getSettings().imageSizes;
	}, []);

	//Get image sizes options if it is a stored image
	const getImageSizeOptions = () => {
		if (!imageObject) return [];

		const options = [];
		const sizes = imageObject.media_details.sizes;
		for (const key in sizes) {
			const size = sizes[key];
			const imageSize = imageSizes.find((s) => s.slug === key);
			if (imageSize) {
				options.push({
					label: imageSize.name,
					value: size.source_url,
				});
			}
		}
		return options;
	};

	const onchangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeDescription = (newDesc) => {
		setAttributes({ description: newDesc });
	};
	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: '' });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};
	const onSelectURL = (newURL) => {
		setAttributes({ url: newURL, id: undefined, alt: '' });
	};
	const onChangeImageSize = (newURL) => {
		setAttributes({ url: newURL });
	};
	const onUploadError = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({
				url: undefined,
				alt: '',
			});
		}
	}, []);

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL();
		}
	}, [url]);

	useEffect(() => {
		if (url && !prevURL && isSelected) {
			titleRef.current.focus();
		}
	}, [url, prevURL]);

	useEffect(() => {
		if (prevIsSelected && !isSelected) {
			setSelectedLink();
		}
	}, [isSelected, prevIsSelected]);

	const removeImage = () => {
		setAttributes({
			url: undefined,
			alt: '',
			id: undefined,
		});
	};

	return (
		<>
			{url && !isBlobURL(url) && (
				<>
					<InspectorControls>
						<PanelBody title={__('Image Settings', 'team-members')}>
							{id && (
								<SelectControl
									label={__('Image Size', 'team-members')}
									options={getImageSizeOptions()}
									value={url}
									onChange={onChangeImageSize}
								/>
							)}
							<TextareaControl
								label={__('Alt text', 'team-members')}
								value={alt}
								onChange={onChangeAlt}
								help={__(
									'The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).',
									'team-members'
								)}
							/>
						</PanelBody>
					</InspectorControls>
					<BlockControls group="inline">
						<MediaReplaceFlow
							name={__('Replace Image', 'team-members')}
							onSelect={onSelectImage}
							onSelectURL={onSelectURL}
							onError={onUploadError}
							accept="image/*"
							allowedTypes={['image']}
							mediaID={id}
							mediaURL={url}
						/>
						<ToolbarButton onClick={removeImage}>
							{__('Remove Image', 'team-members')}
						</ToolbarButton>
					</BlockControls>
				</>
			)}
			<div {...blockProps}>
				<div className="lms-features__feature">
					{url && (
						<div
							className={`lms-features__feature__image ${
								isBlobURL(url) ? 'is-loading' : ''
							}`}
						>
							<img src={url} alt={alt} />
							{isBlobURL(url) && <Spinner />}
						</div>
					)}
					<MediaPlaceholder
						icon="admin-users"
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						onError={onUploadError}
						accept="image/*"
						allowedTypes={['image']}
						disableMediaButtons={url}
						notices={noticeUI}
					/>
					<p>
						<RichText
							ref={titleRef}
							placeholder={__('Feature title', 'team-member')}
							tagName="span"
							className="feature-title"
							onChange={onchangeTitle}
							value={title}
							allowedFormats={[]}
						/>
						<RichText
							placeholder={__(
								'Feature description',
								'team-member'
							)}
							tagName="span"
							className="feature-description"
							onChange={onChangeDescription}
							value={description}
							allowedFormats={[]}
						/>
					</p>
				</div>
			</div>
		</>
	);
};
export default EditFeature;
