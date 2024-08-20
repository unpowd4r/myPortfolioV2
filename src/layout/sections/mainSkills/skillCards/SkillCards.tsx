import typeScriptImg from '../../../../components/icons/logos_typescript-icon-round.svg'
import htmlImg from '../../../../components/icons/skill-icons_css.svg'
import cssImg from '../../../../components/icons/skill-icons_html.svg'
import reactImg from '../../../../components/icons/skill-icons_react-dark.svg'

import { Card } from '../styled/Styled'

const iconsSkills: { id: number; icon: string; name: string }[] = [
	{ id: 1, icon: htmlImg, name: 'HTML' },
	{ id: 2, icon: cssImg, name: 'CSS' },
	{ id: 3, icon: reactImg, name: 'React' },
	{ id: 4, icon: typeScriptImg, name: 'Type Script' },
]

export const SkillCards = () => {
	return (
		<>
			{iconsSkills.map((skill: { id: number; icon: string; name: string }) => (
				<Card key={skill.id} icon={skill.icon}>
					<p>{skill.name}</p>
				</Card>
			))}
		</>
	)
}
