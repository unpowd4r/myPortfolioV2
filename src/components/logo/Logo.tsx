import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import logoTip from '../icons/logo 1.svg'

export const Logo = () => {
	return (
		<LogoAs>
			<a href=''>
				<img src={logoTip} alt='Logo' />
			</a>
		</LogoAs>
	)
}

const LogoAs = styled.div`
	a {
		img {
			@media ${theme.media.mobile} {
				height: 37px;
				width: 37px;
			}
		}
	}
`
