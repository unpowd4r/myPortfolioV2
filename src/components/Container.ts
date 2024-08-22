import styled from 'styled-components'
import { theme } from './../styles/Theme'

export const Container = styled.div`
	max-width: 1220px;
	width: 100%;
	min-height: 100%;

	padding: 0 15px;
	margin: 0 auto;

	@media ${theme.media.tablet} {
		max-width: 560px;
		width: 100%;
	}

	@media ${theme.media.mobile} {
		max-width: 354px;
		width: 100%;
	}

	/* border: 1px solid red; */
`
