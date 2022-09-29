import './style.scss';

import { render } from '@wordpress/element';
import App from './App.js';

const ToRender = document.getElementsByClassName('lms-add-to-cart-button');

for (let i = 0; i < ToRender.length; i++) {
	render(
		<App dataPosts={ToRender[i].getAttribute('data-posts')} />,
		ToRender[i]
	);
}
