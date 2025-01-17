import { FC } from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
	background-color: #ffffff;

	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 100px;

	box-sizing: border-box;
	padding: 5px;
	border-radius: 15px;
`;

const CardTitle = styled.h4`
	margin: 5px;
`;

const CardValue = styled.p`
	color: #4c309b;
`;

export interface OverviewCardProps {
	label: string;
	value: string;
}

const OverviewCard: FC<OverviewCardProps> = function ({ label, value }) {
	return (
		<CardWrapper>
			<CardTitle>{label}</CardTitle>
			<CardValue>
				<b>{value}</b>
			</CardValue>
		</CardWrapper>
	);
};

export default OverviewCard;
