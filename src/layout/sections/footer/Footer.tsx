import styled from 'styled-components'
import wave from '../../../components/img/footerWaves/Wave.svg'

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

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	min-height: 243px;
	background: #222;
	background-image: url(${wave}), url(${wave});
	background-size: cover, auto;
	background-position: center, bottom;
	background-repeat: no-repeat;
`
