import './style.editor.scss';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classNames from 'classnames';

const EditArrow = (props) => {
	const { attributes } = props;
	const { className, columns } = attributes;
	const classes = classNames(className, {
		'lms-features': true,
		'row': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={['lms-matic-custom-blocks/feature']}
				template={[
					[
						'lms-matic-custom-blocks/feature',
						{
							title: 'Name 1',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						},
					],
					[
						'lms-matic-custom-blocks/feature',
						{
							title: 'Name 2',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						},
					],
					[
						'lms-matic-custom-blocks/feature',
						{
							title: 'Name 3',
							description:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						},
					],
				]}
			/>
		</div>
	);
};
export default EditArrow;
