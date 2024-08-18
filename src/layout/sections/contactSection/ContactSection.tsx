import styled from 'styled-components'
import emailIcon from '../../../components/icons/contactIcons/email.svg'
import instIcon from '../../../components/icons/contactIcons/inst-icon.svg'
import locationIcon from '../../../components/icons/contactIcons/location.svg'
import telephoneIcon from '../../../components/icons/contactIcons/telephone.svg'
import tgIcon from '../../../components/icons/contactIcons/tg-icon.svg'
import wuIcon from '../../../components/icons/contactIcons/wu-icon.svg'
import { TitleProject } from '../projects/buttons/styledProjects/StyledProjects'

const socialIcons = [instIcon, tgIcon, wuIcon]

export const ContactSection = () => {
	return (
		<ContactUsSection>
			<TitleProject>Contact Us</TitleProject>
			<FormSendMessage>
				<MessageSection>
					<h2>Get in touch</h2>
					<FormSection>
						<div>
							<FormContacts type='E-mail' placeholder='E-mail' />
							<FormContacts type='Phone' placeholder='Phone' />
						</div>
						<TextMessage placeholder='Message'></TextMessage>
					</FormSection>
					<SendMessageButton>Send</SendMessageButton>
				</MessageSection>
				<div>
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
				</div>
			</FormSendMessage>
			<IconsSocialSection>
				{socialIcons.map(icon => (
					<IconsSocial key={icon.id} src={icon} />
				))}
			</IconsSocialSection>
		</ContactUsSection>
	)
}

const IconsSocial = styled.img`
	margin-left: 20px;
	&:first-child {
		margin-left: 0px;
	}
`

const IconsSocialSection = styled.div`
	display: flex;
`

const FormSendMessage = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	height: 462px;
	width: 932px;

	background-color: #424141;
`

const ContactUsSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100vh;

	background-color: #222;
`

const MessageSection = styled.div`
	display: flex;
	flex-direction: column;
`
const FormSection = styled.div`
	div {
		display: flex;
	}
`

const TextMessage = styled.textarea`
	width: 100%;
	height: 152px;
`

const FormContacts = styled.input`
	width: 100%;
	height: 36px;
`
const SendMessageButton = styled.button`
	width: 118px;
	height: 42px;
	background-color: #2350d6;
`
const ContactCard = styled.div`
	gap: 20px;
	display: flex;
	justify-content: start;
	div {
		h3 {
			margin: 0;
			padding: 0;
		}
	}
`
