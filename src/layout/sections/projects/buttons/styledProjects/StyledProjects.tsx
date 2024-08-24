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

	@media ${theme.media.mobile} {
		font-size: 22px;
	}

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

		@media ${theme.media.mobile} {
			width: 12px;
			height: 12px;
			top: 100px;
		}
	}
	@media ${theme.media.mobile} {
		font-size: 19px;
	}

	@media ${theme.media.mobile} {
		font-size: 17px;
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
		max-width: 160px;
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

		@media ${theme.media.mobile} {
			max-width: 95px;
			height: 25px;
			font-size: 12px;
			border-radius: 40px;
		}
	}

	@media ${theme.media.tablet} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto auto;

		gap: 40px;
		margin-bottom: 62px;
	}

	@media ${theme.media.mobile} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto auto;

		gap: 25px;
		margin-bottom: 38px;
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

		@media ${theme.media.mobile} {
			margin-bottom: 50px;
		}
	}

	@media ${theme.media.tablet} {
		display: grid;
		grid-template-columns: 1fr 1fr;

		gap: 38px;
	}

	@media ${theme.media.mobile} {
		display: grid;
		grid-template-columns: 1fr 1fr;

		gap: 22px;
	}
`

export const CardProject = styled.div`
	max-width: 270px;
	height: 395px;
	border-radius: 26px;

	@media ${theme.media.mobile} {
		width: 162px;
		height: 238px;
		border-radius: 16px;
	}
`
export const Photo = styled.img`
	max-width: 270px;
	height: 395px;

	@media ${theme.media.mobile} {
		max-width: 162px;
		height: 238px;
	}
`

export const PhotoContainer = styled.div`
	max-width: 270px;
	height: 395px;
	position: relative;
	overflow: hidden;
	@media ${theme.media.mobile} {
		max-width: 162px;
		height: 238px;
	}
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

	@media ${theme.media.mobile} {
		height: 94px;
		padding-left: 20px;
		border-radius: 0 0 15px 15px;
	}
`

export const Text = styled.h4`
	font-weight: 700;
	font-size: 20px;
	line-height: 0;

	text-align: center;

	color: ${theme.colors.font};

	padding-bottom: 30px;

	@media ${theme.media.mobile} {
		font-size: 12px;

		text-align: center;

		padding-bottom: 15px;
	}
`

export const ButtonPreview = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 20px;

	@media ${theme.media.mobile} {
		gap: 12px;
	}

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

		@media ${theme.media.mobile} {
			font-size: 8px;
			line-height: 1.48;
			width: 65px;
			height: 16px;
			border-radius: 7px;
		}

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

		@media ${theme.media.mobile} {
			font-size: 8px;
		}

		&:hover {
			color: ${theme.colors.font};
		}
	}
`
