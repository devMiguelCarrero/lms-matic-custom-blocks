import { registerBlockType } from '@wordpress/blocks';
import './style.editor.scss';
import { textDomain, Colors } from '../../block-data/block-data';
import Edit from './Edit.js';
import Save from './Save.js';

registerBlockType(`${textDomain}/testimonial-carousel`, {
	icon: {
		background: Colors.main,
		foreground: Colors.secondary,
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				enable-background="new 0 0 24 24"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
			>
				<rect fill="none" height="24" width="24" />
				<path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M9,7h6v10H9V7z M18,7h4v10h-4V7z" />
			</svg>
		),
	},
	edit: Edit,
	save: Save,
});
