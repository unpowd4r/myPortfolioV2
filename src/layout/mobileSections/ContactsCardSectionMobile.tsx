import styled from 'styled-components'
import emailIcon from '../../components/icons/contactIcons/email.svg'
import locationIcon from '../../components/icons/contactIcons/location.svg'
import telephoneIcon from '../../components/icons/contactIcons/telephone.svg'
import { theme } from '../../styles/Theme'
import { ContactCard } from '../sections/contactSection/ContactSection'

export const ContactsCardSectionMobile = () => {
	return (
		<ContactsCardMobile>
			<ContactSection>
				<ContactWindow>
					<ContactCard>
						<img src={locationIcon} alt='Location' />
						<div>
							<h4>Location</h4>
							<span>Russia/Samara</span>
						</div>
					</ContactCard>
					<ContactCard>
						<img src={telephoneIcon} alt='Telephone' />
						<div>
							<h4>Phone</h4>
							<span>+9999999999</span>
						</div>
					</ContactCard>
					<ContactCard>
						<img src={emailIcon} alt='Email' />
						<div>
							<h4>Email</h4>
							<span>sergey.frolov@yandex.ru</span>
						</div>
					</ContactCard>
				</ContactWindow>
			</ContactSection>
		</ContactsCardMobile>
	)
}

const ContactSection = styled.div`
	display: flex;
	justify-content: center;

	height: 502px;
	max-width: 594px;
	width: 100%;
	background-color: ${theme.colors.cardsColor};
	border-radius: 10px;

	@media ${theme.media.tablet} {
		padding-top: 20px;
		height: 462px;
		max-width: 592px;
		width: 100%;
	}

	@media ${theme.media.mobile} {
		padding-top: 20px;
		max-width: 364px;
		width: 100%;
		height: 282px;
	}
`

const ContactsCardMobile = styled.div`
	display: none;
	width: 100%;

	@media ${theme.media.tablet} {
		display: flex;

		background-color: ${theme.colors.primaryBg};

		margin-bottom: 44px;
	}

	@media ${theme.media.mobile} {
	}
`

const ContactWindow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: start;

	margin-left: 40px;

	max-width: 592px;
	width: 100%;
`
