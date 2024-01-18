import './style.scss';

import { render } from '@wordpress/element';
import App from './App.js';
import $ from 'jquery';

/*const ToRender = document.getElementsByClassName('lms-add-to-cart-button');

for (let i = 0; i < ToRender.length; i++) {
	render(
		<App dataPosts={ToRender[i].getAttribute('data-posts')} />,
		ToRender[i]
	);
}*/

function renderApp(element) {
	const dataPosts = $(element).data('posts');
	render(<App dataPosts={dataPosts} />, element);
}

function processNewCarouselElements() {
	$('body .lms-add-to-cart-button:not(.rendered)').each(function (
		index,
		element
	) {
		$(element).addClass('rendered');
		renderApp(element);
	});
}

function observeDOMChanges() {
	const targetNode = document.body;
	const config = { childList: true, subtree: true };

	const observer = new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				mutation.addedNodes.forEach((node) => {
					console.log();
					if (
						node.nodeType === Node.ELEMENT_NODE &&
						$(node).find('.lms-add-to-cart-button').length > 0
					) {
						processNewCarouselElements();
					}
				});
			}
		}
	});

	observer.observe(targetNode, config);
}

processNewCarouselElements();
observeDOMChanges();
