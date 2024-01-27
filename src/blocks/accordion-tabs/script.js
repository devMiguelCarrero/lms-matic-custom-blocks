import './style.scss';
import { render } from '@wordpress/element';

import App from './App';

function renderApp(tabBlock) {

	let tabArray = [];
	let tab = tabBlock.getElementsByClassName('lms-accordion-tabs__tab');

	for (let subTab of tab) {
		let title = subTab.getElementsByClassName('tab-title')[0];
		let content = subTab.getElementsByClassName('tab-content')[0];

		tabArray.push({
			title: title.innerText,
			content: content.innerHTML,
		});
	}

	render(<App tabInfo={tabArray} />, tabBlock);
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

processNewElement('lms-accordion-tabs');
observeDOMChanges('lms-accordion-tabs');
