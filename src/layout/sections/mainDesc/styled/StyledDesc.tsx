import styled from 'styled-components'
import { theme } from './../../../../styles/Theme'

export const MainPhoto = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: 80px;
	gap: 40px;

	min-width: 1158px;
	min-height: 507px;
	border: 2px solid #838383;
	border-radius: 200px 0 200px 0;

	backdrop-filter: blur(20px);
	background: linear-gradient(
		132deg,
		rgba(57, 57, 57, 0.5) 0%,
		rgba(0, 66, 255, 0.05) 100%
	);
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
		color: ${theme.colors.font};
		border-radius: 20px;
		width: 200px;
		height: 54px;

		background-color: ${theme.colors.accent};
		margin-right: 32px;
	}

	a {
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;
		color: #6c92ff;
	}
`
