import styled from 'styled-components'
import wave from '../../../components/img/footerWaves/Wave.svg'
import { theme } from '../../../styles/Theme'

export const Footer = () => {
	return (
		<FooterSection>
			<h2>Coded by Frolov Sergei Mikhailovich</h2>
			<span>All Rights Reserved 2024</span>
		</FooterSection>
	)
}

const FooterSection = styled.footer`
	color: #fff;

	gap: 8px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	padding-top: 100px;

	min-height: 245px;

	background: #222;
	background-image: url(${wave}), url(${wave});
	background-size: contain, auto;
	background-position: center, bottom;
	background-repeat: no-repeat;

	h2 {
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		font-size: 16px;
		color: ${theme.colors.font};
	}

	span {
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		font-size: 11px;
		color: ${theme.colors.font};
	}
`
