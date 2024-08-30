import styled from 'styled-components'
import cardImage from '../../../components/img/infoImg/card.svg'
import { theme } from '../../../styles/Theme'

export const MyInfo = styled.section`
	display: flex;
	justify-content: space-between;

	background-color: #a6bcfa;

	@media screen and (max-width: 1300px) {
		background-image: url(${cardImage});
		background-repeat: no-repeat;
		background-size: 448px 412px;
		background-position: 22px 615px;
	}

	@media ${theme.media.tablet} {
		min-height: 1108px;
	}

	@media ${theme.media.mobile} {
		min-height: 668px;

		background-image: url(${cardImage});
		background-repeat: no-repeat;
		background-size: 232px 215px;
		background-position: 15px 415px;
	}
`

export const MyPhoto = styled.img`
	max-width: 820px;

	@media screen and (max-width: 1300px) {
		max-width: 495px;
		object-fit: contain;
	}

	@media ${theme.media.mobile} {
		max-width: 260px;
	}
`
