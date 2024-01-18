import './style.scss';

import { render } from '@wordpress/element';
import App from './App.js';
import $ from 'jquery';

function renderApp(element) {
	render(<App />, element);
}

function processNewCommentElements() {
	$('body .lms-comments-section:not(.rendered)').each(function (
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
						$(node).find('.lms-comments-section').length > 0
					) {
						processNewCommentElements();
					}
				});
			}
		}
	});

	observer.observe(targetNode, config);
}

processNewCommentElements();
observeDOMChanges();
