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

	@media (max-width: 768px) {
		width: 335px;
		height: 335px;
		margin-top: 30px;
	}
`
