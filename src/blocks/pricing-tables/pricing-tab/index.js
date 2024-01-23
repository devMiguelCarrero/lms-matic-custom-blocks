import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { textDomain } from '../../../block-data/block-data';
import Edit from './edit';
import Save from './save';

registerBlockType(`${textDomain}/pricing-tab`, {
	title: __('Pricing Tab', 'lmns-matic-custom-blocks'),
	description: __('A Pricing tables price tab', 'lmns-matic-custom-blocks'),
	icon: 'admin-users',
	parent: [`${textDomain}/pricing-tables`],
	supports: {
		reusable: false,
		html: false,
	},
  attributes: {
    price: {
      type: 'string',
      default: '1000000'
    }
  },
	edit: Edit,
	save: Save,
});
