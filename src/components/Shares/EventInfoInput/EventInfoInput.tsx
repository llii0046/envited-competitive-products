import { ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';

import { color } from '../../../styles/variables';

const { neutrals4, neutrals5, redForeground, purple2, darkPurple } = color;

interface JobAdInputProps {
	placeholder: string;
	onChange: ChangeEventHandler;
	value: string | number;
	required?: boolean;
}

const Input = styled.input`
	background-color: ${neutrals5};
	border: 1px solid transparent;
	border-radius: 10px;
	color: ${darkPurple};
	font-size: 20px;
	outline: none;
	padding: 16px;
	width: 100%;

	::placeholder {
		color: ${neutrals4};
	}
	&:hover {
		background-color: ${purple2};
	}
	${props =>
		props.required &&
		css`
			border: 1px solid ${redForeground};
		`}
`;

const JobAdInput: React.FC<JobAdInputProps> = props => {
	const { placeholder, onChange, value, required = false } = props;
	return (
		<div>
			<Input
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				required={required}
			/>
		</div>
	);
};

export default JobAdInput;
