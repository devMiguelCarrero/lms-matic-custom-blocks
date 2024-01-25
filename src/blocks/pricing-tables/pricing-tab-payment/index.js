import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../../block-data/block-data';
import Edit from './edit';
import Save from './save';

registerBlockType(`${textDomain}/pricing-tab-payment`, {
	title: __('Pricing Tab Payment', 'lmns-matic-custom-blocks'),
	description: __(
		'Here you can add the payment information',
		'lmns-matic-custom-blocks'
	),
	icon: 'admin-users',
	parent: [`${textDomain}/pricing-tab`],
	supports: {
		reusable: false,
		html: false,
	},
	edit: Edit,
	save: Save,
});
