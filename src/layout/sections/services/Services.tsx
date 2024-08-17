import styled from 'styled-components'
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

const ServicesAll = styled.div`
	height: 100vh;

	background-color: #57adf8;
`

const ServiceCards = styled.div`
	display: flex;
	justify-content: center;

	background-color: #57adf8;
`

const Title = styled.h2`
	text-align: center;
`
