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

const ServicesAll = styled.section`
	height: 100vh;
`

const ServiceCards = styled.div`
	display: flex;
	justify-content: center;
`

const Title = styled.h2`
	text-align: center;
`
