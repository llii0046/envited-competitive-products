import styled from 'styled-components';

import { color, devices } from '../../../styles/variables';

const { envitedPurple, envitedPink, whiteColor } = color;

interface ButtonProps {
	buttonText: string;
	onClick?: React.MouseEventHandler;
}

const StyleButton = styled.button`
	background: linear-gradient(90deg, ${envitedPurple} 3.25%, ${envitedPink} 100%);
	border: 1px solid transparent;
	border-radius: 10px;
	color: ${whiteColor};
	cursor: pointer;
	font-size: 20px;
	height: 55px;
	margin-top: 50px;
	width: 180px;

	@media ${devices.mobile} {
		width: 320px;
	}
`;

const Button: React.FC<ButtonProps> = props => {
	const { buttonText, onClick } = props;
	return <StyleButton onClick={onClick}>{buttonText}</StyleButton>;
};

export default Button;
