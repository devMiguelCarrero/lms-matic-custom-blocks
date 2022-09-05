import { registerBlockType } from '@wordpress/blocks';
import { textDomain, Colors } from '../../../block-data/block-data';
import Edit from './Edit.js';
import Save from './Save.js';

registerBlockType(`${textDomain}/feature`, {
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
				viewBox="0 0 24 24"
				style={{ enableBackground: 'new 0 0 24 24' }}
				xmlSpace="preserve"
				preserveAspectRatio="none"
			>
				<path d="M18,8c0-3.31-2.69-6-6-6C8.69,2,6,4.69,6,8c0,1.97,0.95,3.71,2.41,4.8L7,22l5-3l5,3l-1.41-9.2C17.05,11.71,18,9.97,18,8z   M12,12c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,12,12,12z" />
			</svg>
		),
	},
	edit: Edit,
	save: Save,
});
