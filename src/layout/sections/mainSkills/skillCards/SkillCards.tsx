import typeScriptImg from '../../../../components/icons/logos_typescript-icon-round.svg'
import htmlImg from '../../../../components/icons/skill-icons_css.svg'
import cssImg from '../../../../components/icons/skill-icons_html.svg'
import reactImg from '../../../../components/icons/skill-icons_react-dark.svg'

import { Card, IconsImg } from '../styled/Styled'

const iconsSkills: { id: number; icons: any; name: string }[] = [
	{ id: 1, icons: htmlImg, name: 'HTML' },
	{ id: 2, icons: cssImg, name: 'CSS' },
	{ id: 3, icons: reactImg, name: 'React' },
	{ id: 4, icons: typeScriptImg, name: 'Type Script' },
]

export const SkillCards = () => {
	return (
		<>
			{iconsSkills.map((skill: { id: number; icons: any; name: string }) => (
				<Card key={skill.id}>
					<IconsImg src={skill.icons} alt={skill.name} />
					<p>{skill.name}</p>
				</Card>
			))}
		</>
	)
}
