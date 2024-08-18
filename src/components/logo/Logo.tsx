import styled from 'styled-components'
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
	margin-right: 806px;
`
