import './style.scss';

import { render, createPortal } from '@wordpress/element';
import App from './App.js';
import $ from 'jquery';

function renderApp(element) {
	const dataPosts = $(element).data('posts');
	render(<App dataPosts={dataPosts} />, element);
}

function processNewCarouselElements() {
	$('body .lms-post-carousel:not(.rendered)').each(function (index, element) {
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
					if (
						node.nodeType === Node.ELEMENT_NODE &&
						$(node).find('.lms-post-carousel').length > 0
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
