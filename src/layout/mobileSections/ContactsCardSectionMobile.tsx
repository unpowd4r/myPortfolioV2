import styled from 'styled-components'
import emailIcon from '../../components/icons/contactIcons/email.svg'
import locationIcon from '../../components/icons/contactIcons/location.svg'
import telephoneIcon from '../../components/icons/contactIcons/telephone.svg'
import { theme } from '../../styles/Theme'
import { ContactCard } from '../sections/contactSection/ContactSection'

export const ContactsCardSectionMobile = () => {
	return (
		<ContactsCardMobile>
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
		</ContactsCardMobile>
	)
}

const ContactsCardMobile = styled.div`
	display: none;

	@media ${theme.media.tablet} {
		display: flex;
		flex-direction: column;
		align-items: center;

		background-color: ${theme.colors.primaryBg};

		margin-bottom: 44px;
	}
`

const ContactWindow = styled.div`
	height: 502px;
	width: 594px;
	background-color: ${theme.colors.cardsColor};

	display: flex;
	flex-direction: column;
	justify-content: center;

	padding-left: 108px;
	gap: 30px;

	@media ${theme.media.mobile} {
		width: 364px;
		height: 308px;
		padding-left: 65px;
		gap: 0;
	}
`
