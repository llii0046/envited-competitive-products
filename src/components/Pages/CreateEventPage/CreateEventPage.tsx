import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ERouterType } from '../../../constant/router';
import { color } from '../../../styles/variables';
import Button from '../../Shares/Button';
import EventInfoContainer from '../../Shares/EventInfoContainer';
import EventInfoInput from '../../Shares/EventInfoInput';

const { darkPurple } = color;

const Container = styled.div`
	padding: 30px 160px;
`;

const PageTitle = styled.h2`
	color: ${darkPurple};
	font-size: 48px;
`;

const CreateEventPage = () => {
	const [eventName, setEventName] = useState<string>('');
	const router = useNavigate();

	const handleClick = () => {
		const path = `/${ERouterType.EVENT}`;
		router(path);
	};

	return (
		<Container>
			<PageTitle>Create your event</PageTitle>
			<EventInfoContainer title="Event name">
				<EventInfoInput
					placeholder="Please enter event name"
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setEventName(event.target.value)
					}
					value={eventName}
				/>
			</EventInfoContainer>

			<EventInfoContainer title="Host name" />

			<EventInfoContainer title="Start time" />

			<EventInfoContainer title="End time" isOptional />

			<EventInfoContainer title="Location" />

			<EventInfoContainer title="EventPhoto" isOptional />

			<Button buttonText="Submit" onClick={handleClick} />
		</Container>
	);
};

export default CreateEventPage;
