import {
	useBlockProps,
	InnerBlocks,
	RichText,
	Inserter,
} from '@wordpress/block-editor';
import { IconButton } from '@wordpress/components';
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

const EditGreekFeature = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { className, title } = attributes;

	const classes = classNames(className, {
		'lms-accordion-tabs__tab': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const onChangeTitle = useCallback((title) => {
		setAttributes({ title });
	});

	function MyButtonBlockAppender({ rootClientId }) {
		return (
			<Inserter
				rootClientId={rootClientId}
				renderToggle={({ onToggle, disabled }) => (
					<IconButton
						className="my-button-block-appender"
						onClick={onToggle}
						disabled={disabled}
						label="Add a Block"
						icon="plus"
					/>
				)}
				isAppender
			/>
		);
	}

	return (
		<div {...blockProps}>
			<RichText
				tagName="h4"
				key="tab-title"
				className="tab-title"
				formattingControl={['bold', 'italic']}
				value={title}
				placeholder={__('Tab title', 'lms-matic-custom-blocks')}
				onChange={onChangeTitle}
			/>
			<div className="tab-content">
				<InnerBlocks
					allowedBlocks={[
						'core/image',
						'core/paragraph',
						'core/list',
					]}
					renderAppender={() => (
						<MyButtonBlockAppender rootClientId={clientId} />
					)}
				/>
			</div>
		</div>
	);
};
export default EditGreekFeature;
