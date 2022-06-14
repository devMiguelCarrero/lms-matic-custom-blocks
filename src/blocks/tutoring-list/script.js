import './style.scss';

import { render, createPortal } from '@wordpress/element';
import App from './App.js';
import $ from 'jquery';

$('body .lms-tutoring-grid').each(function (Index, el) {
	render(<App dataPosts={$(this).data('posts')} />, this);
});