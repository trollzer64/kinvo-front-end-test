import { FC } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
	width: calc(100%);
	max-height: 90px;

	position: sticky;
	top: 0;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	box-sizing: border-box;
	padding: 27px 30px;

	background-color: #ffffff;
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 35px;
`;

const InfoWrapper = styled.article`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 35px;
`;

const CardTitle = styled.h3`
	margin: 5px;
`;

const CardValue = styled.p`
	color: #4c309b;
`;

const Header: FC = function () {
	return (
		<HeaderWrapper>
			<h1>KinvoPremium</h1>
			<InnerWrapper>
				<InfoWrapper>
					<h2 hidden>Resumo</h2>
					<article>
						<h3>Saldo bruto</h3>
						<CardValue>
							<b>130.521.230,02</b>
						</CardValue>
					</article>
					<article>
						<h3>Valor Aplicado</h3>
						<CardValue>
							<b>521.230,02</b>
						</CardValue>
					</article>
					<article>
						<h3>Rentabilidade</h3>
						<CardValue>
							<b>2,34%</b>
						</CardValue>
					</article>
				</InfoWrapper>
				<div>
					<button>Minha carteira</button>
					<ul>
						<li>Opção</li>
					</ul>
				</div>
				<div>
					<button>Icone do whopper</button>
					<ul>
						<li>Opção</li>
					</ul>
				</div>
			</InnerWrapper>
		</HeaderWrapper>
	);
};

export default Header;
