import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';

const EditTabPayment = (props) => {
	const { attributes } = props;
	const { className } = attributes;

	const classes = classNames(className, {
		'lms-pricing-tabs__payment': true,
	});

	const blockProps = useBlockProps({
		className: classes,
	});

	const TEMPLATE = [['core/html']];

	return (
		<div {...blockProps}>
			<InnerBlocks template={TEMPLATE} />
		</div>
	);
};
export default EditTabPayment;
