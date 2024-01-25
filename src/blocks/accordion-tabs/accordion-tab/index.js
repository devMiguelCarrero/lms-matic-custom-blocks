import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../../block-data/block-data';
import Edit from './edit';
import Save from './save';

registerBlockType(`${textDomain}/accordion-tab`, {
	title: __('Accordion Tab', 'lms-matic-custom-blocks'),
	description: __('An accordion tab item', 'lms-matic-custom-blocks'),
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
		>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
		</svg>
	),
	parent: ['lms-matic-custom-blocks/accordion-tabs'],
	supports: {
		reusable: false,
	},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h4.tab-title',
		},
	},
	edit: Edit,
	save: Save,
});
