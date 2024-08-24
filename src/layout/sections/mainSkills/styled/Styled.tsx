import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

type CardPropsIcon = {
	icon: string
}

export const MainSkills = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-left: 250px;

	gap: 12px;

	@media ${theme.media.tablet} {
		display: none;
	}
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

export const Card = styled.div<CardPropsIcon>`
	position: relative;
	padding-top: 40px;
	text-align: center;

	font-weight: 600;
	font-size: 20px;

	height: 90px;
	max-width: 270px;
	width: 100%;

	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
	background-color: ${theme.colors.secondaryBg};
	border-radius: 24px;
	flex-grow: 1;

	gap: 30px;

	@media ${theme.media.tablet} {
		max-width: 270px;
		width: 100%;
		height: 152px;
		flex-grow: 1;

		margin-top: 75px;

		padding-top: 72px;
		font-weight: 600;
		font-size: 33px;
		line-height: 1.36;
	}

	@media ${theme.media.mobile} {
		max-width: 145px;
		width: 100%;
		height: 82px;

		flex-grow: 1;

		margin-top: 40px;
		padding-top: 38px;
		font-size: 18px;
	}

	&::before {
		content: '';
		z-index: 9999;
		position: absolute;

		max-width: 55px;
		width: 100%;
		height: 55px;

		top: -32px;
		left: 30%;

		background-image: url(${props => props.icon});
		background-size: 55px 55px;
		background-repeat: no-repeat;

		box-shadow: 0 0 0 12px ${theme.colors.primaryBg};
		border-radius: 100%;

		@media ${theme.media.tablet} {
			background-image: url(${props => props.icon});
			background-size: 92px 92px;
			background-repeat: no-repeat;

			box-shadow: 0 0 0 20px ${theme.colors.primaryBg};
			border-radius: 100%;

			left: 30%;
			top: -40%;

			max-width: 92px;
			width: 100%;
			height: 92px;
		}

		@media ${theme.media.mobile} {
			background-image: url(${props => props.icon});
			background-size: 55px 55px;
			background-repeat: no-repeat;

			box-shadow: 0 0 0 10px ${theme.colors.primaryBg};
			border-radius: 100%;

			top: -35%;

			width: 55px;
			height: 55px;
		}
	}
`
