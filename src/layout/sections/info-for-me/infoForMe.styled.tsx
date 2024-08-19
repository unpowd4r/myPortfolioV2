import styled from 'styled-components'
import cardImage from '../../../components/img/infoImg/card.svg'

export const MyInfo = styled.section`
	min-width: 1440px;
	width: 100%;
	min-height: 946px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-image: url(${cardImage});
	background-repeat: no-repeat;
	background-position: 42px center;
	background-color: #a6bcfa;
`

export const MyPhoto = styled.img`
	min-width: 820px;
	min-height: 945px;
`
