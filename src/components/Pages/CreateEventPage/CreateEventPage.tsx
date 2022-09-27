import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ERouterType } from '../../../constant/router';
import { color } from '../../../styles/variables';
import Button from '../../Shares/Button';
import EventInfoContainer from '../../Shares/EventInfoContainer';
import EventInfoInput from '../../Shares/EventInfoInput';
import { patch as storePatch } from '../../../utils/storageHelper';
import { EVENT_FORM } from '../../../constant/storeLocation';

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
	const [hostName, setHostName] = useState<string>('');
	const [location, setLocation] = useState<string>('');
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
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setEventName(event.target.value);
						storePatch(EVENT_FORM, { eventName: event.target.value });
					}}
					value={eventName}
				/>
			</EventInfoContainer>
			<EventInfoContainer title="Host name">
				<EventInfoInput
					placeholder="Please enter host name"
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setHostName(event.target.value);
						storePatch(EVENT_FORM, { hostName: event.target.value });
					}}
					value={hostName}
				/>
			</EventInfoContainer>

			<EventInfoContainer title="Start time" />

			<EventInfoContainer title="End time" isOptional />

			<EventInfoContainer title="Location">
				<EventInfoInput
					placeholder="Please enter location"
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setLocation(event.target.value);
						storePatch(EVENT_FORM, { location: event.target.value });
					}}
					value={location}
				/>
			</EventInfoContainer>

			<EventInfoContainer title="EventPhoto" isOptional />

			<Button buttonText="Next" onClick={handleClick} />
		</Container>
	);
};

export default CreateEventPage;
