import styled from 'styled-components'
import { theme } from '../../../../../styles/Theme'

export const TitleProject = styled.h2`
	text-align: center;

	font-weight: 600;
	font-size: 32px;
	line-height: 1.36;
	color: ${theme.colors.font};

	padding-top: 60px;
	padding-bottom: 5px;
`

export const ProjectSection = styled.section`
	min-width: 1440px;
`

export const ButtonsStyled = styled.div`
	min-width: 1160px;
	width: 100%;

	display: flex;
	justify-content: center;
	gap: 40px;

	margin-bottom: 55px;

	button {
		width: 160px;
		height: 42px;

		font-size: 20px;
		font-weight: 400;
		line-height: 1.36;
		color: ${theme.colors.font};

		border-radius: 66px;
		background: ${theme.colors.primaryBg};
		border: 3px solid ${theme.colors.solidColor};

		transition: all 0.2s ease;

		&:hover {
			border: none;
			background: ${theme.colors.secondaryBg};
		}
	}
`

export const Cards = styled.div`
	display: flex;
	justify-content: center;
	gap: 38px;
`

export const CardProject = styled.div`
	width: 23%;
	border-radius: 26px;
`
export const Photo = styled.img`
	width: 270px;
	height: 394px;
`

export const PhotoContainer = styled.div`
	min-width: 270px;
	position: relative;
	overflow: hidden;
`

export const Overlay = styled.div`
	position: absolute;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	bottom: 0;
	left: 0;

	width: 100%;
	height: 155px;

	background-color: #353535;
	padding-left: 32px;
	border-radius: 0 0 26px 26px;
	color: ${theme.colors.font};

	transition: all 0.2s ease;

	&:hover {
		background-color: ${theme.colors.secondaryBg};
	}
`

export const Text = styled.h4`
	font-weight: 700;
	font-size: 20px;
	line-height: 0;

	text-align: center;

	color: ${theme.colors.font};

	padding-bottom: 30px;
`

export const ButtonPreview = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 20px;

	button {
		width: 110px;
		height: 30px;

		color: #353535;

		font-weight: 700;
		font-size: 14px;

		background-color: ${theme.colors.font};
		border-radius: 12px;

		transition: all 0.2s ease;

		&:hover {
			color: ${theme.colors.font};
			background-color: ${theme.colors.accent};
		}
	}

	a {
		color: #a6bcfa;
		font-weight: 400;
		font-size: 14px;

		transition: all 0.2s ease;

		&:hover {
			color: ${theme.colors.font};
		}
	}
`
