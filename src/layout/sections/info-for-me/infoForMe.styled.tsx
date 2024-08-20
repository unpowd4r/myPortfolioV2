import styled from 'styled-components'
import cardImage from '../../../components/img/infoImg/card.svg'

export const MyInfo = styled.section`
	position: relative;
	min-height: 945px;

	display: flex;
	justify-content: center;
	align-items: center;

	flex-wrap: wrap;

	/* background-image: url(${cardImage});
	background-repeat: no-repeat;
	background-position: 42px center; */
	background-color: #a6bcfa;
`

export const MyPhoto = styled.img`
	width: 820px;
	height: 945px;
`
