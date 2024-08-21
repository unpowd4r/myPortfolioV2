import styled from 'styled-components'
import arrowRight from '../../../../components/icons/ArrowIconServices.svg'
import editIcon from '../../../../components/icons/services-icons/edit.svg'
import notebookIcon from '../../../../components/icons/services-icons/notebook-2.svg'
import playIcon from '../../../../components/icons/services-icons/video-play.svg'
import { theme } from '../../../../styles/Theme'

const servicesInfo = [
	{
		id: 1,
		image: playIcon,
		title: 'Video Edit',
		titleTwo: 'Service',
		link: 'View More',
	},
	{
		id: 2,
		image: editIcon,
		title: 'Ui/Ux',
		titleTwo: 'Designer',
		link: 'View More',
	},
	{
		id: 3,
		image: notebookIcon,
		title: 'Frontend',
		titleTwo: 'Developer',
		link: 'View More',
	},
]

export const ServicesCard = () => {
	return (
		<ServiceCard>
			{servicesInfo.map(item => (
				<Block key={item.id}>
					<img src={item.image} alt='icon' />
					<h2>
						{item.title}
						<br /> {item.titleTwo}
					</h2>
					<p>
						{item.link}
						<img src={arrowRight} alt='Arrow' />
					</p>
				</Block>
			))}
		</ServiceCard>
	)
}

const ServiceCard = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;

	&:last-child {
		margin-bottom: 55px;
	}
`

const Block = styled.div`
	padding-left: 60px;
	padding-top: 115px;

	width: 335px;
	height: 402px;

	background-color: ${theme.colors.cardsColor};

	img {
		height: 75px;
		width: 75px;

		margin-bottom: 28px;
	}

	h2 {
		font-weight: 500;
		font-size: 32px;
		line-height: 1.25;

		margin-bottom: 30px;
	}

	p {
		display: flex;
		gap: 12px;

		font-weight: 400;
		font-size: 16px;
		color: #2157f2;

		transition: all 0.3s ease;

		&:hover {
			color: ${theme.colors.font};
			cursor: pointer;
		}

		img {
			width: 20px;
			height: 20px;
		}
	}

	@media ${theme.media.tablet} {
		display: flex;
		flex-direction: column;
		justify-content: center;

		height: 336px;
		width: 280px;

		h2 {
			font-weight: 500;
			font-size: 26px;
			line-height: 1.25;
		}

		p {
			font-weight: 400;
			font-size: 13px;

			img {
				height: 16px;
				width: 16px;
			}
		}

		img {
			width: 62px;
			height: 62px;
		}
	}
`
