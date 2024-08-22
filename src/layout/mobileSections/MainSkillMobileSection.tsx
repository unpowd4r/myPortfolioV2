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

	@media ${theme.media.tablet} {
		padding-top: 68px;
		padding-bottom: 82px;

		background-color: ${theme.colors.primaryBg};

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media ${theme.media.mobile} {
		padding-top: 50px;
		padding-bottom: 62px;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`
