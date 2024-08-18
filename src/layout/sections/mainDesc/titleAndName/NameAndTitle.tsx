import styled from 'styled-components'
import { theme } from './../../../../styles/Theme'

export const NameAndTitle = () => {
	return (
		<SectionNameAndTitle>
			<h3>
				I'm <span>Frolov</span> <br /> Sergei Mikhailovich
			</h3>
			<h2>
				Draft is a revolutionary mobile app built to help you manage your
				business easily and save your money.
			</h2>
		</SectionNameAndTitle>
	)
}

const SectionNameAndTitle = styled.div`
	color: ${theme.colors.font};
	h3 {
		font-weight: 700;
		font-size: 50px;
		line-height: 1.36;

		padding-bottom: 20px;
	}

	h2 {
		max-width: 375px;

		font-weight: 400;
		font-size: 20px;
		line-height: 1.5;

		padding-bottom: 42px;
	}

	span {
		color: ${theme.colors.accent};
	}
`
