import styled from 'styled-components'
import { theme } from './../../../../styles/Theme'

export const MainPhoto = styled.section`
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
		rgba(57, 57, 57, 0.5) 0%,
		rgba(0, 66, 255, 0.05) 100%
	);

	/* &::before {
		position: absolute;
		z-index: 900;
		content: '';
		background-image: url('../../../../components/icons/backgroundDecoration-icons/+.svg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		width: 200px;
		height: 200px; 
	}*/
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
