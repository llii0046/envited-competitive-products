import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import LandingPageImage from '../../../assets/landing-page-image.svg';
import { ERouterType } from '../../../constant/router';
import { color, devices, sizes } from '../../../styles/variables';
import Button from '../../Shares/Button';

const { darkPurple, lightPurple, neutrals1, envitedPurple, envitedPink } = color;

const LandingPageContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;

	@media ${devices.laptop} {
		padding: 60px 160px;
		justify-content: space-between;
		flex-direction: row;
	}
`;

const Pitch = styled.h2`
	color: ${darkPurple};
	font-size: 36px;
	margin-bottom: 0;
	width: 200px;

	@media ${devices.mobile} {
		font-size: 64px;
		width: 400px;
	}
`;

const Description = styled.p`
	color: ${neutrals1};
	font-size: 16px;
	font-weight: 300;
	width: 300px;

	@media ${devices.mobile} {
		font-size: 24px;
		width: 100%;
	}
`;

const Emphasis = styled.strong`
    color: ${lightPurple};
    background: linear-gradient(90deg, ${envitedPurple} 24.2%, ${envitedPink} 120.46%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

const ContentWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 600px;

	@media ${devices.laptop} {
		align-items: flex-end;
		text-align: right;
	}
`;

const ShowCase = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${devices.laptop} {
		align-items: flex-end;
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

const LandingPage = () => {
	const [isLaptop, setIsLaptop] = useState<boolean>(true);
	const description = 'Easily host and share events with your friends across any social media.';
	const buttonText = 'Create my event';
	const router = useNavigate();
	const checkLaptop = () => {
		if (window.innerWidth > sizes.laptop) {
			setIsLaptop(true);
		}
	};

	const handleResize = () => {
		checkLaptop();
		if (window.innerWidth <= sizes.laptop) {
			setIsLaptop(false);
		}
	};

	useEffect(() => {
		checkLaptop();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	const handleClick = () => {
		router(ERouterType.CREATE_EVENT);
	};

	return (
		<LandingPageContainer>
			{isLaptop ? (
				<>
					<Image src={LandingPageImage} alt="Landing Page Image" />
					<ShowCase>
						<ContentWrapper>
							<Pitch>
								Image if <Emphasis>SnapChat</Emphasis> had events.
							</Pitch>
							<Description>{description}</Description>
						</ContentWrapper>
						<Button buttonText={buttonText} onClick={handleClick} />
					</ShowCase>
				</>
			) : (
				<>
					<ContentWrapper>
						<Pitch>
							Image if <Emphasis>SnapChat</Emphasis> had events.
						</Pitch>
						<Description>{description}</Description>
					</ContentWrapper>
					<Image src={LandingPageImage} alt="Landing Page Image" />
					<Button buttonText={buttonText} onClick={handleClick} />
				</>
			)}
		</LandingPageContainer>
	);
};

export default LandingPage;
