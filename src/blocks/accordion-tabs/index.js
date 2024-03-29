import { registerBlockType } from '@wordpress/blocks';
import './style.editor.scss';
import { textDomain, Colors } from '../../block-data/block-data';

import './accordion-tab';
import Edit from './Edit.js';
import Save from './Save.js';

registerBlockType(`${textDomain}/accordion-tabs`, {
	icon: {
		background: Colors.white,
		foreground: Colors.main,
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
			>
				<path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
				<path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" />
			</svg>
		),
	},
	edit: Edit,
	save: Save,
});
