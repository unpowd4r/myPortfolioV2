import styled from 'styled-components'
import photo from '../../../../components/img/photo.png'

export const Photo = () => {
	return (
		<div>
			<PhotoMain src={photo} alt='Photo' />
		</div>
	)
}

const PhotoMain = styled.img`
	width: 400px;
	height: 400px;
`
