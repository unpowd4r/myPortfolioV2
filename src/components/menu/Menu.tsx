import { StyledMenu } from '../../layout/sections/mainSkills/skillCards/skillStyled'

const menu = ['Home', 'Projects', 'About', 'Content']

export const Menu = () => {
	return (
		<StyledMenu>
			<ul>
				{menu.map(item => (
					<li>
						<a href='#'>{item}</a>
					</li>
				))}
			</ul>
		</StyledMenu>
	)
}
