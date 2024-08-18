import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
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
				<Ellipce>
					<div></div>
				</Ellipce>
				<ButtonsProject />
				<CardsProject />
			</Container>
		</ProjectSection>
	)
}

const Ellipce = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		width: 18px;
		height: 18px;

		border-radius: 50%;
		background: #d9d9d9;
		background: linear-gradient(
			180deg,
			#a6bcfa 0%,
			${theme.colors.accent} 100%
		);

		margin-bottom: 35px;
	}
`
