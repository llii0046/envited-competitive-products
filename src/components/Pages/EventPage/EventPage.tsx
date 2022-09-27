import BirthdayCake from '../../../assets/birthday-cake.png';
import styled from 'styled-components';
import { color, devices } from '../../../styles/variables';
import { IEvent } from '../../../interfaces/event';
import { get as storeGet } from '../../../utils/storageHelper';
import { EVENT_FORM } from '../../../constant/storeLocation';

const { darkPurple, neutrals3, neutrals2 } = color;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${devices.laptop} {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 100px 170px;
	}
`;
const Image = styled.img`
	width: 165px;

	@media ${devices.mobile} {
		width: 310px;
	}

	@media ${devices.laptop} {
		width: 440px;
	}
`;

const EventName = styled.h3`
	color: ${darkPurple};
	font-size: 28px;

	@media ${devices.mobile} {
		font-size: 37px;
	}

	@media ${devices.laptop} {
		font-size: 48px;
	}
`;

const HostBy = styled.p`
	font-size: 14px;
	color: ${neutrals3};
	font-weight: 400;

	@media ${devices.mobile} {
		font-size: 18px;
	}
`;

const Emphasis = styled.strong`
	color: ${neutrals2};
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const EventPage = () => {
	const eventForm: IEvent = storeGet(EVENT_FORM, false);
	const { eventName, hostName } = eventForm;
	return (
		<Container>
			<ContentWrapper>
				<EventName>{eventName}</EventName>
				<HostBy>
					Hosted by <Emphasis> {hostName} </Emphasis>{' '}
				</HostBy>
			</ContentWrapper>
			<Image src={BirthdayCake} alt="Birthday Cake" />
		</Container>
	);
};

export default EventPage;
