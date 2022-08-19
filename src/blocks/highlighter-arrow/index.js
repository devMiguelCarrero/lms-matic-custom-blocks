import { registerBlockType } from '@wordpress/blocks';
import './style.editor.scss';
import { textDomain, Colors } from '../../block-data/block-data';
import Edit from './Edit.js';
import Save from './Save.js';

registerBlockType(`${textDomain}/highlighter-arrow`, {
	icon: {
		background: Colors.main,
		foreground: Colors.secondary,
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				version="1.1"
				x="0px"
				y="0px"
				width={32}
				height={32}
				viewBox="0 0 32 32"
				enableBackground="new 0 0 32 32"
				xmlSpace="preserve"
				preserveAspectRatio="none"
			>
				<g>
					<g>
						<path d="M15,2C6.72,2,0,8.72,0,17c0,8.28,6.72,15,15,15c8.28,0,15-6.72,15-15C30,8.72,23.28,2,15,2z M15,30C7.83,30,2,24.17,2,17    S7.83,4,15,4s13,5.83,13,13S22.17,30,15,30z" />
					</g>
					<g>
						<polygon points="21.71,19.71 15,26.41 8.29,19.71 9.71,18.29 14,22.59 14,8 16,8 16,22.59 20.29,18.29   " />
					</g>
				</g>
			</svg>
		),
	},
	edit: Edit,
	save: Save,
});
