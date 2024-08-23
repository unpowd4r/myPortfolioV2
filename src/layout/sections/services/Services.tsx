import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { ServicesCard } from './servicesCard/ServicesCard'

export const Services = () => {
	return (
		<ServicesAll>
			<Title>Services</Title>
			<ServiceCards>
				<ServicesCard />
			</ServiceCards>
		</ServicesAll>
	)
}

const ServicesAll = styled.section`
	min-height: 588px;
`

const ServiceCards = styled.div`
	display: flex;
	justify-content: center;
`

const Title = styled.h2`
	font-weight: 600;
	font-size: 32px;
	line-height: 1.36;
	color: ${theme.colors.font};

	position: relative;
	text-align: center;

	padding-top: 48px;
	margin-bottom: 82px;

	@media ${theme.media.mobile} {
		margin-bottom: 50px;
	}

	::before {
		content: '';
		display: inline-block;

		width: 18px;
		height: 18px;

		top: 92px;
		right: 49.5%;

		position: absolute;

		border-radius: 50%;
		background: #d9d9d9;
		background: linear-gradient(
			180deg,
			#a6bcfa 0%,
			${theme.colors.accent} 100%
		);
		@media ${theme.media.mobile} {
			width: 10px;
			height: 10px;
			right: 49%;
			top: 80px;
		}
	}

	@media ${theme.media.mobile} {
		font-size: 17px;
	}
`
