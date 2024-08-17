import styled from 'styled-components'
import socialIcon from '../../../components/icons/sociAL.svg'

export const FixedElement = () => {
	return (
		<FixedEl>
			<ImgIcons src={socialIcon} alt='Social Icons' />
		</FixedEl>
	)
}

const ImgIcons = styled.img``

const FixedEl = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 201px;
	width: 61px;

	position: fixed;
	left: 0;
	top: 50%;
	transform: translateY(10%);
	padding: 10px;

	background-color: #3838ff;
`
