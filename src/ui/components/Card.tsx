import { FC } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
	background-color: #ffffff;

	box-sizing: border-box;
	padding: 18px;
	border-radius: 15px;
`;

export interface CardProps {
	title: string;
}

const Card: FC<CardProps> = function ({ title, children }) {
	return (
		<CardWrapper>
			<h3>{title}</h3>
			{children}
		</CardWrapper>
	);
};

export default Card;
