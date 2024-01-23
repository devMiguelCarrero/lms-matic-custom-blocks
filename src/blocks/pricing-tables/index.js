import { registerBlockType } from '@wordpress/blocks';
import './style.editor.scss';
import { textDomain, Colors } from '../../block-data/block-data';
import './pricing-tab';
import Edit from './Edit.js';
import Save from './Save.js';

registerBlockType(`${textDomain}/pricing-tables`, {
	icon: {
		background: Colors.main,
		foreground: Colors.secondary,
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="800"
				height="800"
				viewBox="0 0 24 24"
			>
				<path fill="none" d="M0 0h24v24H0z"></path>
				<path d="M3 7l8.445-5.63a1 1 0 011.11 0L21 7v14a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm9 4a2 2 0 100-4 2 2 0 000 4z"></path>
			</svg>
		),
	},
	edit: Edit,
	save: Save,
});
