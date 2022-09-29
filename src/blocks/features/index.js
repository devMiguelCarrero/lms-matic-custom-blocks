import { registerBlockType } from '@wordpress/blocks';
import './feature';
import './style.editor.scss';
import { textDomain, Colors } from '../../block-data/block-data';
import Edit from './Edit.js';
import Save from './Save.js';

registerBlockType(`${textDomain}/features`, {
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
				style={{ enableBackground: 'new 0 0 32 32' }}
				xmlSpace="preserve"
				preserveAspectRatio="none"
			>
				<path d="M29.146,25.146l-4.152-4.152c1.267-1.849,2.011-4.084,2.011-6.494c0-6.354-5.151-11.505-11.505-11.505  S3.996,8.146,3.996,14.5c0,2.41,0.743,4.646,2.01,6.494l-4.152,4.152c-0.143,0.143-0.186,0.357-0.108,0.545  C1.822,25.878,2.005,26,2.207,26H6v3.793c0,0.202,0.121,0.385,0.309,0.462L6.5,30.293c0.13,0,0.258-0.051,0.354-0.146l4.811-4.811  c1.201,0.426,2.488,0.669,3.836,0.669c1.347,0,2.635-0.243,3.836-0.669l4.811,4.811c0.096,0.096,0.224,0.146,0.354,0.146  l0.191-0.038C24.878,30.178,25,29.995,25,29.793V26h3.793c0.202,0,0.385-0.122,0.462-0.309  C29.332,25.504,29.289,25.289,29.146,25.146z M7,28.586V25H3.414l3.197-3.197c1.09,1.325,2.475,2.392,4.049,3.123L7,28.586z   M15.5,25.006c-5.803,0-10.506-4.703-10.506-10.506S9.697,3.994,15.5,3.994S26.006,8.697,26.006,14.5S21.303,25.006,15.5,25.006z   M24,25v3.586l-3.66-3.66c1.573-0.731,2.959-1.798,4.049-3.123L27.586,25H24z M15.5,6.999c-4.143,0-7.501,3.358-7.501,7.501  s3.358,7.501,7.501,7.501s7.501-3.358,7.501-7.501S19.643,6.999,15.5,6.999z M15.5,21.006c-3.594,0-6.506-2.912-6.506-6.506  s2.912-6.507,6.506-6.507s6.506,2.913,6.506,6.507S19.094,21.006,15.5,21.006z M18.338,13.308c0.085,0.263-0.059,0.544-0.321,0.63  l-1.724,0.56l1.065,1.466c0.162,0.224,0.112,0.536-0.11,0.698c-0.224,0.163-0.536,0.113-0.698-0.11l-1.065-1.466l-1.064,1.466  c-0.162,0.224-0.476,0.273-0.699,0.11c-0.223-0.162-0.272-0.475-0.11-0.698l1.065-1.466l-1.724-0.56  c-0.263-0.086-0.406-0.367-0.321-0.63c0.086-0.263,0.367-0.406,0.631-0.321l1.723,0.56v-1.812c0-0.276,0.224-0.5,0.5-0.5  s0.5,0.224,0.5,0.5v1.812l1.723-0.56C17.97,12.901,18.252,13.045,18.338,13.308z" />
			</svg>
		),
	},
	edit: Edit,
	save: Save,
});