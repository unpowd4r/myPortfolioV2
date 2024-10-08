import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

export const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 58px;

		@media ${theme.media.mobile} {
			gap: 30px;
			display: flex;
		}

		li {
			list-style-type: none;
			a {
				color: ${theme.colors.font};
				font-family: 'Roboto', sans-serif;
				font-style: 16px;
				font-weight: 400;
			}
		}
	}
`
