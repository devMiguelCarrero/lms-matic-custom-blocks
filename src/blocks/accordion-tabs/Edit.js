import './style.editor.scss';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const EditAccordionTabs = (props) => {
	const { attributes } = props;
	const { className } = attributes;

	const classes = classNames(className, {
		'lms-accordion-tabs': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={[`${textDomain}/accordion-tab`]}
				template={[
					[`${textDomain}/accordion-tab`],
					[`${textDomain}/accordion-tab`],
					[`${textDomain}/accordion-tab`],
					[`${textDomain}/accordion-tab`],
				]}
				//templateLock="all"
			/>
		</div>
	);
};
export default EditAccordionTabs;
