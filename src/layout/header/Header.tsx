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
					<Menu />
					<MoonLightNightTheme />
				</FlexWrapper>
			</ContainerHeader>
		</StyledHeader>
	)
}

const ContainerHeader = styled.div`
	min-width: 1362px;

	padding: 33px 35px;
`
