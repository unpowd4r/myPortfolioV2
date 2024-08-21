import styled from 'styled-components'
import { MainDesc } from '../mainDesc/MainDesc'
import { MainSkillsSection } from '../mainSkills/MainSkills'
import { MainSection } from './styled/MainStyled'

export const Main = () => {
	return (
		<MainSection>
			<ContainerMain>
				<MainDesc />
				<MainSkillsSection />
			</ContainerMain>
		</MainSection>
	)
}

const ContainerMain = styled.div`
	max-width: 1220px;
	width: 100%;
	min-height: 100%;

	padding: 0 15px;
	margin: 0 auto;

	@media screen and (max-width: 1024px) {
		padding-bottom: 50px;
	}
`
