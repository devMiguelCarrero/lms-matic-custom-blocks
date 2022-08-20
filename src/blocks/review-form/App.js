import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import axios from 'axios';

import { textDomain, PostInfo, URLs } from '../../block-data/block-data';

const ReviewFormApp = ({ dataPosts }) => {
	const [reviewText, setReviewText] = useState('');
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(200);
	const [sent, setSent] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');

	const reviewTextHandler = (event) => {
		setReviewText(event.target.value);
	};

	const sendReviewHandler = async (event) => {
		event.preventDefault();
		setLoading(true);

		const params = new URLSearchParams();
		params.append('action', 'lmscx_update_post_reviews');
		params.append('current_post', PostInfo.current_post);
		params.append('message', reviewText);

		const response = await axios.post(URLs.ajax_url, params);
		setResponseMessage(response.data.message);

		setSent(true);
		setLoading(false);
	};

	return (
		<>
			{!sent && (
				<form
					className="lms-review-form__form"
					onSubmit={sendReviewHandler}
				>
					<textarea
						className="lms-review-form__input"
						rows={4}
						onChange={reviewTextHandler}
						value={reviewText}
					/>
					<button
						type="submit"
						className="btn lms-button lms-review-form__submit"
						disabled={loading || reviewText.length === 0}
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
