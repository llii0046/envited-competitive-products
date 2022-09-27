import styled from 'styled-components';
import { color } from '../../../styles/variables';

interface ThumbnailCardProps {
	icon: string;
	title: string;
	information: string;
}

const { whiteColor, darkPink } = color;

const StyledCard = styled.div`
	background-color: ${whiteColor};
	height: 240px;
	width: 100%;
	display: flex;
	align-items: center;
`;

const Icon = styled.div`
	background-color: red;
`;

const CardTitle = styled.p`
	color: ${darkPink};
`;

const Information = styled.p`
	color: ${darkPink};
`;

const ContentWrapper = styled.div``;
const ThumbnailCard: React.FC<ThumbnailCardProps> = props => {
	const { icon, title, information } = props;
	return (
		<StyledCard>
			<div>123</div>
			<ContentWrapper>
				<CardTitle>{title}</CardTitle>
				<Information>{information}</Information>
			</ContentWrapper>
		</StyledCard>
	);
};

export default ThumbnailCard;
