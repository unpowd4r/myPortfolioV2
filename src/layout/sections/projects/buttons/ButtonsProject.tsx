import { ButtonsStyled } from './styledProjects/StyledProjects'

const navigationTitle = ['Story', 'Post', 'Banner', 'Trailer', 'Design', 'More']

export const ButtonsProject = () => {
	return (
		<ButtonsStyled>
			{navigationTitle.map(title => (
				<button>{title}</button>
			))}
		</ButtonsStyled>
	)
}
