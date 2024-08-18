import arrowRight from '../../../../components/icons/Arrow-Right 1.svg'
import { MainButtons } from '../styled/StyledDesc'

export const Buttons = () => {
	return (
		<MainButtons>
			<button>
				<h5>See Projects</h5> <img src={arrowRight} alt='Arrow' />
			</button>
			<a href=''>Download Resume</a>
		</MainButtons>
	)
}
