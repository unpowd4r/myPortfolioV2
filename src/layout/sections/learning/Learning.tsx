import styled from 'styled-components'
import { TitleProject } from '../projects/buttons/styledProjects/StyledProjects'

export const Learning = () => {
	return (
		<LearningSection>
			<TitleProject>Learning</TitleProject>
			<p>JavaScript & TypeScript</p>
			<WindowFigures>
				<Figure></Figure>
				<Figure></Figure>
				<Figure></Figure>
				<Figure></Figure>
			</WindowFigures>
			<p>HTML, CSS & React</p>
			<WindowFigures>
				<Figure></Figure>
				<Figure></Figure>
				<Figure></Figure>
				<Figure></Figure>
			</WindowFigures>
		</LearningSection>
	)
}

const LearningSection = styled.div`
	height: 100vh;
`

const Figure = styled.div`
	width: 330px;
	height: 192px;

	background-color: #87beef;
`

const WindowFigures = styled.div`
	display: flex;
	justify-content: space-around;
`
