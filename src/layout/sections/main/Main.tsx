import { MainDesc } from '../mainDesc/MainDesc'
import { MainSkillsSection } from '../mainSkills/MainSkills'
import { Container } from './../../../components/Container'
import { MainSection } from './styled/MainStyled'

export const Main = () => {
	return (
		<MainSection>
			<Container>
				<MainDesc />
				<MainSkillsSection />
			</Container>
		</MainSection>
	)
}
