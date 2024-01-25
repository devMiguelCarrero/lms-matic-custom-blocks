import { useCallback, useEffect, useState } from '@wordpress/element';
import he from 'he';

import DisplayButton from '../../components/buttons/DisplayButton/DisplayButton';

const AccordionApp = ({ tabInfo }) => {
	const [tabs, setTabs] = useState();

	useEffect(() => {
		setTabs([
			...tabInfo.map((tab) => {
				tab.open = false;
				return tab;
			}),
		]);
	}, []);

	const openTabHandler = useCallback((index) => {
		setTabs((oldTabs) => {
			const newTabs = [...oldTabs];
			newTabs[index].open = !newTabs[index].open;
			return newTabs;
		});
	}, []);

	return (
		<>
			{tabs &&
				tabs.map((tab, index) => {
					return (
						<div className="lms-accordion-tabs__tab">
							<div
								className="lms-accordion-tabs__title"
								onClick={() => {
									openTabHandler(index);
								}}
							>
								<h6 className="tab-title">{tab.title}</h6>
								<DisplayButton
									className="display-tab"
									active={tab.open}
									size="medium"
								></DisplayButton>
							</div>
							<div
								className={`tab-content ${tab.open && 'open'}`}
								dangerouslySetInnerHTML={{
									__html: he.decode(tab.content),
								}}
							/>
						</div>
					);
				})}
		</>
	);
};
export default AccordionApp;
