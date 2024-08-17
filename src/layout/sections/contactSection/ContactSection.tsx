import styled from 'styled-components'
import emailIcon from '../../../components/icons/contactIcons/email.svg'
import locationIcon from '../../../components/icons/contactIcons/location.svg'
import telephoneIcon from '../../../components/icons/contactIcons/telephone.svg'
import socialIcon from '../../../components/icons/sociAL1.svg'
import { TitleProject } from '../projects/buttons/styledProjects/StyledProjects'

export const ContactSection = () => {
	return (
		<ContactUsSection>
			<TitleProject>Contact Us</TitleProject>
			<FormSendMessage>
				<MessageSection>
					<h2>Get in touch</h2>
					<FormSection>
						<FormContacts type='E-mail' placeholder='E-mail' />
						<FormContacts type='Phone' placeholder='Phone' />
						<TextMessage placeholder='Message'></TextMessage>
					</FormSection>
					<SendMessageButton>Send</SendMessageButton>
				</MessageSection>
				<div>
					<ContactCard>
						<img src={locationIcon} alt='Location' />
						<div>
							<h3>Location</h3>
							<span>Russia/Samara</span>
						</div>
					</ContactCard>
					<ContactCard>
						<img src={telephoneIcon} alt='Telephone' />
						<div>
							<h3>Phone</h3>
							<span>+9999999999</span>
						</div>
					</ContactCard>
					<ContactCard>
						<img src={emailIcon} alt='Email' />
						<div>
							<h3>Email</h3>
							<span>sergey.frolov@yandex.ru</span>
						</div>
					</ContactCard>
				</div>
			</FormSendMessage>
			<IconsSocial src={socialIcon} alt='Social icons' />
		</ContactUsSection>
	)
}

const IconsSocial = styled.img``

const FormSendMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin: 0 auto;

	height: 462px;
	width: 932px;

	background-color: #424141;
`

const ContactUsSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100vh;

	background-color: #241d1d;
`

const MessageSection = styled.div`
	display: flex;
	flex-direction: column;
`
const FormSection = styled.div``

const TextMessage = styled.textarea`
	width: 429px;
	height: 152px;
`

const FormContacts = styled.input`
	width: 211px;
	height: 36px;
`
const SendMessageButton = styled.button`
	width: 117px;
	height: 43px;
	background-color: #2350d6;
`
const ContactCard = styled.div`
	display: flex;

	justify-content: center;
	/* align-items: center; */

	div {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`
