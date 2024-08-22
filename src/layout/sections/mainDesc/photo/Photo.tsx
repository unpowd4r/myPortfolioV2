import styled from 'styled-components'
import photo from '../../../../components/img/photo.png'
import { theme } from '../../../../styles/Theme'

export const Photo = () => {
	return (
		<div>
			<PhotoMain src={photo} alt='Photo' />
		</div>
	)
}

const PhotoMain = styled.img`
	width: 400px;
	height: 400px;

	@media screen and (max-width: 1024px) {
		margin-top: 16px;
	}

	@media ${theme.media.tablet} {
		width: 335px;
		height: 335px;
		margin-top: 30px;
	}

	@media ${theme.media.mobile} {
		width: 188px;
		height: 188px;
		margin-top: 16px;
	}
`
