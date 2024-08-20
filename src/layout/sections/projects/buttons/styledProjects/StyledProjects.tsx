import styled from 'styled-components'
import { theme } from '../../../../../styles/Theme'

export const TitleProject = styled.h2`
	position: relative;
	text-align: center;

	font-weight: 600;
	font-size: 32px;
	line-height: 1.36;

	padding-top: 60px;
	padding-bottom: 58px;

	::before {
		content: '';
		display: inline-block;

		width: 18px;
		height: 18px;

		top: 110px;
		right: 49%;

		position: absolute;

		border-radius: 50%;
		background: #d9d9d9;
		background: linear-gradient(
			180deg,
			#a6bcfa 0%,
			${theme.colors.accent} 100%
		);
	}
`

export const ProjectSection = styled.section`
	min-height: 1245px;
`

export const ButtonsStyled = styled.div`
	max-width: 1160px;
	width: 100%;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
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
			cursor: pointer;
		}
	}
`

export const Cards = styled.div`
	max-width: 1195px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	gap: 36px;
	&:last-child {
		margin-bottom: 82px;
	}
`

export const CardProject = styled.div`
	width: 270px;
	height: 395px;
	border-radius: 26px;
`
export const Photo = styled.img`
	width: 270px;
	height: 395px;
`

export const PhotoContainer = styled.div`
	width: 270px;
	height: 395px;
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
	border-radius: 0 0 25px 25px;
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

		cursor: pointer;

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
