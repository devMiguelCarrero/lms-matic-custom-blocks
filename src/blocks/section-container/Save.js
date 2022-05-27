import "./style.scss";

import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { textDomain } from '../../block-data/block-data';
import classNames from 'classnames';

const SaveTournamentList = (props) => {
	const { attributes } = props;
	const { className } = attributes;

	const classes = classNames(className, {
		'lms-section': true,
	});

	const blockProps = useBlockProps.save({
		className: classes,
	});

	return (
		<section {...blockProps}>
			<InnerBlocks.Content />
		</section>
	);
};
export default SaveTournamentList;
