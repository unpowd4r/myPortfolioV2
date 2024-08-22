import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import moon from '../icons/moon 1.svg'

export const MoonLightNightTheme = () => {
	return (
		<a href=''>
			<ImageMoon src={moon} alt='Moon' />
		</a>
	)
}

const ImageMoon = styled.img`
	@media ${theme.media.mobile} {
		height: 20px;
		width: 20px;
	}
`
