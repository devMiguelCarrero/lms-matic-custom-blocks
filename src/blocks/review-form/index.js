import { registerBlockType } from '@wordpress/blocks';
import './style.editor.scss';
import { textDomain, Colors } from '../../block-data/block-data';
import Edit from './Edit.js';
import Save from './Save.js';

registerBlockType(`${textDomain}/review-form`, {
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
				viewBox="0 0 38 38"
				style={{ enableBackground: 'new 0 0 38 38' }}
				xmlSpace="preserve"
				preserveAspectRatio="none"
				width={32}
				height={32}
			>
				<path
					className="st0"
					d="M37.1,8.9c-1.1-1.1-3.1-1.1-4.2,0L20,21.8V26h4.2l3.2-3.2C27.8,24,28,25.4,28,27c0,2.2-1.2,5.6-1.7,7H8.4  c0.6-1.8,1.6-4.8,1.6-7c0-3.7-1.1-6.1-2.1-8.4C6.9,16.4,6,14.3,6,11c0-2.2,1.2-5.6,1.7-7h17.9C24.9,5.8,24,8.8,24,11  c0,1.3,0.1,2.5,0.4,3.6l1.7-1.7C26,12.2,26,11.7,26,11c0-2.8,1.9-7.6,1.9-7.6L28.5,2H6.3L6.1,2.6C6,2.8,4,7.8,4,11  c0,3.7,1.1,6.1,2.1,8.4C7.1,21.6,8,23.7,8,27c0,2.8-1.9,7.6-1.9,7.6L5.5,36h22.2l0.3-0.6C28,35.2,30,30.2,30,27c0-2.3-0.4-4.2-1-5.8  l8.1-8.1C38.3,12,38.3,10,37.1,8.9z M35.7,11.7L23.4,24H22v-1.4l12.3-12.3c0.4-0.4,1-0.4,1.4,0C36.1,10.7,36.1,11.3,35.7,11.7z"
				/>
			</svg>
		),
	},
	edit: Edit,
	save: Save,
});
