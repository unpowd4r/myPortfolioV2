import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { SkillCards } from '../sections/mainSkills/skillCards/SkillCards'

export const MainSkillMobileSection = () => {
	return (
		<MainSkillsMobileSection>
			<SkillCards />
		</MainSkillsMobileSection>
	)
}

const MainSkillsMobileSection = styled.div`
	display: none;
	padding: 100px 70px;

	@media ${theme.media.tablet} {
		padding: 100px 70px;

		background-color: ${theme.colors.primaryBg};

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media ${theme.media.mobile} {
		padding: 60px 50px;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`
