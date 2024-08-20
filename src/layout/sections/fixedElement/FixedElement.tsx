import styled from 'styled-components'
import instIcon from '../../../components/icons/fixedElements-icons/instIcon.svg'
import tgIcon from '../../../components/icons/fixedElements-icons/tgIcon.svg'
import wuIcon from '../../../components/icons/fixedElements-icons/wuIcon.svg'
import { theme } from '../../../styles/Theme'

export const FixedElement = () => {
	return (
		<FixedEl>
			<a href='#'>
				<ImgIcons src={instIcon} alt='Social Icons' />
			</a>
			<a href='#'>
				<ImgIcons src={wuIcon} alt='Social Icons' />
			</a>
			<a href='#'>
				<ImgIcons src={tgIcon} alt='Social Icons' />
			</a>
		</FixedEl>
	)
}

const ImgIcons = styled.img`
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	border-radius: 30%;
`

const FixedEl = styled.div`
	width: 60px;
	height: 200px;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	gap: 16px;

	position: fixed;
	left: 0;
	top: 50%;

	border-radius: 0 25px 25px 0;

	background-color: ${theme.colors.secondaryBg};
`
