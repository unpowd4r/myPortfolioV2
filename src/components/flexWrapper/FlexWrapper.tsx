import styled from 'styled-components'

type FlexWrapperPropsType = {
	direction?: string
	justify?: string
	align?: string
	wrap?: string
	minWidth?: string
	maxWidth?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'flex-start'};
	align-items: ${props => props.align || 'stretch'};
	flex-wrap: ${props => props.wrap || 'nowrap'};

	min-width: ${props => props.minWidth || '100%'};
	max-width: ${props => props.maxWidth || '100%'};
`
