// Libraries
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

// Styles
import './CoachReport.scss';

// Mutation
import { CREATE_REPORT } from './Mutation';

export default function CoachReport(props) {
	const { key } = useParams();

	const [report, setReport] = useState({
		strengths: '',
		growth: '',
		suggestions: '',
		comments: '',
	});

	const [createReport] = useMutation(CREATE_REPORT);

	const { firstName } = props.location.state ? props.location.state : {};

	const handleChange = e => {
		setReport({ ...report, [e.target.name]: e.target.value });
	};

	const handleSave = e => {
		e.preventDefault();
		console.log(report);
		createReport({
			variables: {
				uniqueBooking: key,
				strengths: report.strengths,
				growthAreas: report.growth,
				suggestions: report.suggestions,
				comments: report.comments,
				isSent: false,
			},
		});
	};

	const handleSend = e => {
		e.preventDefault();
		console.log(report);
		createReport({
			variables: {
				uniqueBooking: key,
				strengths: report.strengths,
				growthAreas: report.growth,
				suggestions: report.suggestions,
				comments: report.comments,
				isSent: true,
			},
		});
	};

	return (
		<div className='coachreport-wrapper'>
			<h2 className='coachreport-header'>Feedback</h2>
			<p className='coachreport-txt'>
				Leave feedback on your interview with{' '}
				{props.location.state ? firstName : 'the seeker'} here. Please make it
				as detailed as possible.
			</p>
			<hr />
			<div className='coachreport-question'>
				How did {props.location.state ? firstName : 'the seeker'} do?
			</div>
			<form className='coachreport-form'>
				<label className='coachreport-label'>
					Strengths: <span className='coachreport-required'>*</span>
				</label>
				<textarea
					className='coachreport-txtarea'
					name='strengths'
					placeholder={`${
						props.location.state ? firstName : 'The seeker'
					} is great at...`}
					value={report.strengths}
					onChange={handleChange}
				/>

				<label className='coachreport-label'>
					Areas of Growth: <span className='coachreport-required'>*</span>
				</label>
				<textarea
					className='coachreport-txtarea'
					name='growth'
					placeholder={`${
						props.location.state ? firstName : 'The seeker'
					} could improve at...`}
					value={report.growth}
					onChange={handleChange}
				/>

				<label className='coachreport-label'>
					Suggestions: <span className='coachreport-required'>*</span>
				</label>
				<textarea
					className='coachreport-txtarea'
					name='suggestions'
					placeholder={`${
						props.location.state ? firstName : 'The seeker'
					} should...`}
					value={report.suggestions}
					onChange={handleChange}
				/>

				<label className='coachreport-label'>
					Additional Feedback (optional)
				</label>
				<textarea
					className='coachreport-txtarea'
					name='comments'
					value={report.comments}
					onChange={handleChange}
				/>

				<div className='coachreport-btns'>
					<button className='coachreport-btn-save' onClick={handleSave}>
						Save and skip
					</button>
					<button className='coachreport-btn-send' onClick={handleSend}>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}
