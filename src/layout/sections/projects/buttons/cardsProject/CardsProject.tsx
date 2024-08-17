import {
	default as project2,
	default as project6,
} from '../../../../../components/img/projects/Rectangle 2-1.png'
import {
	default as project3,
	default as project7,
} from '../../../../../components/img/projects/Rectangle 2-2.png'
import {
	default as project4,
	default as project8,
} from '../../../../../components/img/projects/Rectangle 2-3.png'
import {
	default as project1,
	default as project5,
} from '../../../../../components/img/projects/Rectangle 2.png'

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
	{
		id: 5,
		image: project5,
		name: 'Project 5',
		desc: 'Story motion for sale English cources',
	},
	{
		id: 6,
		image: project6,
		name: 'Project 6',
		desc: 'Story motion for sale English cources',
	},
	{
		id: 7,
		image: project7,
		name: 'Project 7',
		desc: 'Story motion for sale English cources',
	},
	{
		id: 8,
		image: project8,
		name: 'Project 8',
		desc: 'Story motion for sale English cources',
	},
]

export const CardsProject = () => {
	return (
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
	)
}
