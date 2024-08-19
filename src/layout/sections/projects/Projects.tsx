import { Container } from '../../../components/Container'
import { ButtonsProject } from './buttons/ButtonsProject'
import { CardsProject } from './buttons/cardsProject/CardsProject'
import {
	ProjectSection,
	TitleProject,
} from './buttons/styledProjects/StyledProjects'

export const Projects = () => {
	return (
		<ProjectSection>
			<Container>
				<TitleProject>Projects</TitleProject>
				<ButtonsProject />
				<CardsProject />
			</Container>
		</ProjectSection>
	)
}
