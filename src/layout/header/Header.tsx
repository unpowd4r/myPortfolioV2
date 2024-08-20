import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { MoonLightNightTheme } from '../../components/moon/MoonLightNightTheme'
import { FlexWrapper } from './../../components/flexWrapper/FlexWrapper'
import { StyledHeader } from './styled/StyledHeader'

export const Header = () => {
	return (
		<StyledHeader>
			<ContainerHeader>
				<FlexWrapper justify={'space-between'} align={'center'}>
					<Logo />
					<HeaderMenuContainer>
						<Menu />
						<MoonLightNightTheme />
					</HeaderMenuContainer>
				</FlexWrapper>
			</ContainerHeader>
		</StyledHeader>
	)
}

const ContainerHeader = styled.div`
	max-width: 1440px;
	width: 100%;

	margin: 0 auto;

	padding: 33px 35px;
`

const HeaderMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 65px;
`
