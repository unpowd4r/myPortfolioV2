import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

export const MainSkills = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 200px;

	gap: 13px;
`

export const IconsImg = styled.img`
	z-index: 9999;
	position: absolute;

	top: -50%;
	left: 50%;
	transform: translateX(-50%);
	margin-bottom: 20px;

	width: 75px;
	height: 75px;

	border: ${theme.colors.primaryBg} solid 10px;
	border-radius: 100%;
`

export const Card = styled.div`
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: 600;
	font-size: 20px;
	line-height: 1.36;

	height: 91px;
	width: 161px;

	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
	background-color: ${theme.colors.secondaryBg};
	border-radius: 24px;

	gap: 30px;
	p {
		padding-top: 20px;
	}
`
