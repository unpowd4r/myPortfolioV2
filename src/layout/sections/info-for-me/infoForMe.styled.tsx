import styled from 'styled-components'
import cardImage from '../../../components/img/infoImg/card.svg'
import { theme } from '../../../styles/Theme'

export const MyInfo = styled.section`
	min-height: 945px;

	display: flex;
	justify-content: space-between;

	background-image: url(${cardImage});
	background-repeat: no-repeat;
	background-position: 42px center;
	background-color: #a6bcfa;

	@media ${theme.media.tablet} {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
	}
`

export const MyPhoto = styled.img`
	width: 820px;
	height: 945px;

	@media ${theme.media.tablet} {
		width: 495px;
		height: 570px;
	}
`
