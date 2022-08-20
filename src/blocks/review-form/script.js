import { render, createPortal } from '@wordpress/element';
import App from './App.js';
import $ from 'jquery';

import './style.scss';

$('body .lms-review-form').each(function (Index, el) {
	render(<App />, this);
});
