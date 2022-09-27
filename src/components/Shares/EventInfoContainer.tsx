import styled from 'styled-components';


import { color } from '../../styles/variables'

const { darkPurple, neutrals3 } = color;

interface EventInfoContainerProps {
    title: string;
    children?: React.ReactNode;
    isOptional?: boolean;
}

const Container = styled.div`
	margin-bottom: 30px;
	width: 100%;
`;

const Header = styled.h3`
	color: ${darkPurple};
	font-size: 18px;
	font-weight: bold;
`;

const Optional = styled.span`
  color: ${neutrals3};
  font-weight: 100;
`

const EventInfoContainer: React.FC<EventInfoContainerProps> = props => {
    const { children, title, isOptional = false } = props;
    return (
        <Container>
            <Header>{title} {isOptional && <Optional>(optional)</Optional>}</Header>
            {children}
        </Container>
    );
};

export default EventInfoContainer;
