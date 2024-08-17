import styled from 'styled-components'

export const Footer = () => {
	return (
		<FooterSection>
			<h2>Coded by Frolov Sergei Mikhailovich</h2>
			<span>All Rights Reserved 2024</span>
		</FooterSection>
	)
}

const FooterSection = styled.footer`
	text-align: center;
	min-height: 243px;

	background-color: #24335c;
`
