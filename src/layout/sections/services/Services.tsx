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
	min-width: 1440px;
	min-height: 690px;
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
	}
`
