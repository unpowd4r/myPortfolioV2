import styled from 'styled-components'
import { theme } from './../../../../styles/Theme'

export const MainPhoto = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	margin-bottom: 80px;
	gap: 40px;

	max-width: 1158px;
	width: 100%;
	min-height: 508px;
	max-height: 845px;
	height: 100%;
	border: 2px solid ${theme.colors.solidColor};
	border-radius: 200px 0 200px 0;

	backdrop-filter: blur(20px);
	background: linear-gradient(
		132deg,
		rgba(14, 22, 65, 0.174) 0%,
		rgba(0, 68, 255, 0.093) 100%
	);

	&::before {
		position: absolute;
		z-index: -1;
		content: '+';

		color: ${theme.colors.secondaryBg};
		font-weight: 600;
		font-size: 150px;
		line-height: 1.36;

		transform: rotate(135deg);
		top: -140px;
		left: 430px;
	}

	/* &::after {
		position: absolute;
		z-index: -10;
		content: '';
		background: radial-gradient(
			circle,
			transparent 50%,
			${theme.colors.secondaryBg} 50%
		);
		border-radius: 50%;
		height: 152px;
		width: 152px;

		left: 88%;
		top: 72%;
	} */
`

export const MyDescMain = styled.div`
	display: flex;
	flex-direction: column;

	max-width: 465px;
`

export const MainButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	button {
		display: flex;

		justify-content: center;
		align-items: center;

		color: ${theme.colors.font};
		border-radius: 20px;
		width: 200px;
		height: 54px;

		background-color: ${theme.colors.accent};
		margin-right: 32px;

		transition: all 0.2s ease;

		h5 {
			font-weight: 600;
			font-size: 15px;
			transition: all 0.3s ease;
		}

		img {
			opacity: 0;
			transition: all 0.3s ease;
		}

		&:hover {
			cursor: pointer;

			img {
				opacity: 1;
				transform: translateX(6px);
			}

			h5 {
				transform: translateX(-6px);
			}
		}
	}

	a {
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;

		color: #6c92ff;

		transition: all 0.2s ease;

		&:hover {
			color: ${theme.colors.font};
		}
	}
`
