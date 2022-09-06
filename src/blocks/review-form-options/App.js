import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import axios from 'axios';

import { textDomain, PostInfo, URLs } from '../../block-data/block-data';
import RadioList from '../../components/Radio/RadioList';

const ReviewFormApp = () => {
	const [reviewOption, setReviewOption] = useState(null);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(200);
	const [sent, setSent] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');

	const reviewOptionHandler = (option) => {
		setReviewOption(option);
	};

	const sendReviewHandler = async (option) => {
		event.preventDefault();
		setLoading(true);

		console.log(reviewOption);

		const params = new URLSearchParams();
		params.append('action', 'lmscx_update_post_reviews_options');
		params.append('current_post', PostInfo.current_post);
		params.append('option', reviewOption);

		const response = await axios.post(URLs.ajax_url, params);
		setResponseMessage(response.data.message);

		setSent(true);
		setLoading(false);
	};

	const options = [
		{ key: 'Martes 20 6:30 pm', value: 'Martes 20 6:30 pm' },
		{ key: 'Miércoles 21 12:00 pm', value: 'Miércoles 21 12:00 pm' },
		{ key: 'Jueves 22 7:00 pm', value: 'Jueves 22 7:00 pm' },
	];

	return (
		<>
			{!sent && (
				<form
					className="lms-review-form__form"
					onSubmit={sendReviewHandler}
				>
					<RadioList
						onRadioChange={reviewOptionHandler}
						options={options}
					/>
					<button
						type="submit"
						className="btn lms-button lms-review-form__submit"
						disabled={loading || !reviewOption}
					>
						{!loading
							? __('Enviar Respuesta', 'lms-matic-custom-blocks')
							: __('Enviando...', 'lms-matic-custom-blocks')}
					</button>
					{status !== 200 && (
						<p className="error-message text-center">
							Ha ocurrido un error inesperado.
						</p>
					)}
				</form>
			)}
			{sent && (
				<h4 className="text-center jumbo-title">{responseMessage}</h4>
			)}
		</>
	);
};
export default ReviewFormApp;
