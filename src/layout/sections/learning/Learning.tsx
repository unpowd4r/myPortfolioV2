import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { TitleProject } from '../projects/buttons/styledProjects/StyledProjects'

export const Learning = () => {
	return (
		<LearningSection>
			<Container>
				<TitleProject>Learning</TitleProject>
				<LearningTechnologies>JavaScript & TypeScript</LearningTechnologies>
				<WindowFigures>
					<Figure></Figure>
					<Figure></Figure>
					<Figure></Figure>
					<Figure></Figure>
				</WindowFigures>
				<LearningTechnologies>HTML, CSS & React</LearningTechnologies>
				<WindowFigures>
					<Figure></Figure>
					<Figure></Figure>
					<Figure></Figure>
					<Figure></Figure>
				</WindowFigures>
			</Container>
		</LearningSection>
	)
}

const LearningSection = styled.section`
	min-height: 750px;
	background-color: ${theme.colors.secondaryBg};
`

const LearningTechnologies = styled.h2`
	font-weight: 500;
	font-size: 20px;
	line-height: 1.36;

	padding-bottom: 10px;
`

const Figure = styled.div`
	width: 330px;
	height: 192px;

	box-shadow: 5px 6px 10px 0 rgba(0, 0, 0, 0.1);
	background-color: #d9d9d9;

	border-radius: 10px;
`

const WindowFigures = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;

	margin-bottom: 22px;
`
