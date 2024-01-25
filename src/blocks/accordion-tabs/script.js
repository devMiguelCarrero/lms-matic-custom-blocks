import './style.scss';
import { render } from '@wordpress/element';

import App from './App';

const tabBlocks = document.getElementsByClassName('lms-accordion-tabs');

for (let tabBlock of tabBlocks) {
	let tabArray = [];
	let tab = tabBlock.getElementsByClassName('lms-accordion-tabs__tab');

	for (let subTab of tab) {
		let title = subTab.getElementsByClassName('tab-title')[0];
		let content = subTab.getElementsByClassName('tab-content')[0];

		tabArray.push({ title: title.innerText, content: content.innerHTML });
	}

	render(<App tabInfo={tabArray} />, tabBlock);
}
