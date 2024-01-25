import { __ } from '@wordpress/i18n';
import LogoLoader from '../../components/loaders/LogoLoader/LogoLoader';
import { useEffect, useState } from '@wordpress/element';
import { URLs, Colors, PostInfo } from '../../block-data/block-data';

import Axios from 'axios';

const CommentSectionApp = () => {
	const [commentSection, setCommentSection] = useState();

	useEffect(() => {
		const getComments = async () => {
			const params = new URLSearchParams();
			
			params.append('course', PostInfo.current_post);
			params.append('action', 'lmscx_get_course_comments_section');

			const response = await Axios.post(URLs.ajax_url, params);
		}
		getComments();
	}, []);

	return <LogoLoader />;
};
export default CommentSectionApp;
