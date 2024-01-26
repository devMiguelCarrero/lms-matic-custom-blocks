import './style.scss';

import { render, createPortal } from '@wordpress/element';
import App from './App.js';

function renderApp(element) {
	const dataPosts = element.getAttribute('data-posts');
	render(<App dataPosts={dataPosts} />, element);
}

function processNewElement(className) {
	document
		.querySelectorAll(`body .${className}:not(.rendered)`)
		.forEach((element, index) => {
			element.classList.add('rendered');
			renderApp(element);
		});
}

function observeDOMChanges(className) {
	const targetNode = document.body;
	const config = { childList: true, subtree: true };

	const observer = new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				mutation.addedNodes.forEach((node) => {
					if (
						node.nodeType === Node.ELEMENT_NODE &&
						node.querySelectorAll(`.${className}`).length > 0
					) {
						processNewElement(className);
					}
				});
			}
		}
	});

	observer.observe(targetNode, config);
}

processNewElement('lms-post-carousel');
observeDOMChanges('lms-post-carousel');
