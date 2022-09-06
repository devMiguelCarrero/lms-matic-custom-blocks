import { render } from '@wordpress/element';
import $ from 'jquery';

import App from './App.js';
import './style.scss';

$('body .lms-review-form-options').each(function (Index, el) {
	render(<App />, this);
});
