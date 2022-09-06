import { useState } from '@wordpress/element';
import './RadioList.scss';

const RadioList = ({ options, onRadioChange }) => {
	const [selectedOption, setSelectedOption] = useState();

	const selectedOptionHandler = (event) => {
		setSelectedOption(event.target.value);
		onRadioChange(event.target.value);
	};

	const radioOptions = options.map((option) => (
		<label className="lms-radio-label">
			<input
				className="lms-radio-label__input"
				onChange={selectedOptionHandler}
				type="radio"
				value={option.key}
				checked={option.key === selectedOption}
			/>
			<span className="lms-radio-label__content">{option.value}</span>
		</label>
	));

	return <div className="lms-radio-list">{radioOptions}</div>;
};
export default RadioList;
