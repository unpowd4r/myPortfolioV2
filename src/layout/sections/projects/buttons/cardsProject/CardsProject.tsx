import styled from 'styled-components'
import { default as project2 } from '../../../../../components/img/projects/Rectangle 2-1.png'
import { default as project3 } from '../../../../../components/img/projects/Rectangle 2-2.png'
import { default as project4 } from '../../../../../components/img/projects/Rectangle 2-3.png'
import { default as project1 } from '../../../../../components/img/projects/Rectangle 2.png'

import {
	ButtonPreview,
	CardProject,
	Cards,
	Overlay,
	Photo,
	PhotoContainer,
	Text,
} from '../styledProjects/StyledProjects'

const cardProjects = [
	{
		id: 1,
		image: project1,
		name: 'Project 1',
		desc: 'Story motion for sale English cources',
	},
	{
		id: 2,
		image: project2,
		name: 'Project 2',
		desc: 'Story motion for sale English cources',
	},
	{
		id: 3,
		image: project3,
		name: 'Project 3',
		desc: 'Story motion for sale English cources',
	},
	{
		id: 4,
		image: project4,
		name: 'Project 4',
		desc: 'Story motion for sale English cources',
	},
]

export const CardsProject = () => {
	return (
		<CardItems>
			<Cards>
				{cardProjects.map(card => (
					<CardProject key={card.id}>
						<PhotoContainer>
							<Photo src={card.image} alt={card.name} />
							<Overlay>
								<Text>{card.desc}</Text>
								<ButtonPreview>
									<button>Edit for you</button>
									<a href='#'>see preview</a>
								</ButtonPreview>
							</Overlay>
						</PhotoContainer>
					</CardProject>
				))}
			</Cards>
			<Cards>
				{cardProjects.map(card => (
					<CardProject key={card.id}>
						<PhotoContainer>
							<Photo src={card.image} alt={card.name} />
							<Overlay>
								<Text>{card.desc}</Text>
								<ButtonPreview>
									<button>Edit for you</button>
									<a href='#'>see preview</a>
								</ButtonPreview>
							</Overlay>
						</PhotoContainer>
					</CardProject>
				))}
			</Cards>
		</CardItems>
	)
}

const CardItems = styled.div`
	display: flex;
	flex-direction: column;

	gap: 30px;
`
