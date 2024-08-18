import styled from 'styled-components'
import editIcon from '../../../../components/icons/services-icons/edit.svg'
import notebookIcon from '../../../../components/icons/services-icons/notebook-2.svg'
import playIcon from '../../../../components/icons/services-icons/video-play.svg'
import { theme } from '../../../../styles/Theme'

const servicesInfo = [
	{
		id: 1,
		image: playIcon,
		title: 'Video Edit <br/> Service',
		link: 'View More',
	},
	{ id: 2, image: editIcon, title: 'Ui/Ux <br/> Designer', link: 'View More' },
	{
		id: 3,
		image: notebookIcon,
		title: 'Website <br/> Developer',
		link: 'View More',
	},
]

export const ServicesCard = () => {
	return (
		<ServiceCard>
			{servicesInfo.map(item => (
				<Block key={item.id}>
					<img src={item.image} alt='icon' />
					<h2>{item.title}</h2>
					<p>{item.link}</p>
				</Block>
			))}
		</ServiceCard>
	)
}

const ServiceCard = styled.div`
	display: flex;
	gap: 50px;
`

const Block = styled.div`
	text-align: center;

	width: 334px;
	height: 402px;

	background-color: ${theme.colors.cardsColor};
`
