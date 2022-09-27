import styled from 'styled-components';
import { color, devices } from '../../../styles/variables';

const { envitedPurple, envitedPink, whiteColor } = color;

interface ButtonProps {
	buttonText: string;
	onClick?: React.MouseEventHandler;
}

const StyleButton = styled.button`
	color: ${whiteColor};
	font-size: 20px;
	width: 180px;
	height: 55px;
	background: linear-gradient(90deg, ${envitedPurple} 3.25%, ${envitedPink} 100%);
	border-radius: 10px;
	border: 1px solid transparent;
	cursor: pointer;
	margin-top: 50px;

	@media ${devices.mobile} {
		width: 320px;
	}
`;

const Button: React.FC<ButtonProps> = props => {
	const { buttonText, onClick } = props;
	return <StyleButton onClick={onClick}>{buttonText}</StyleButton>;
};

export default Button;
