import styled from 'styled-components'
import emailIcon from '../../../components/icons/contactIcons/email.svg'
import instIcon from '../../../components/icons/contactIcons/inst-icon.svg'
import locationIcon from '../../../components/icons/contactIcons/location.svg'
import telephoneIcon from '../../../components/icons/contactIcons/telephone.svg'
import tgIcon from '../../../components/icons/contactIcons/tg-icon.svg'
import wuIcon from '../../../components/icons/contactIcons/wu-icon.svg'
import { theme } from '../../../styles/Theme'
import { ContactsCardSectionMobile } from '../../mobileSections/ContactsCardSectionMobile'
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
						<FormMailPhone>
							<FormContacts type='E-mail' placeholder='E-mail' />
							<FormContacts type='Phone' placeholder='Phone' />
						</FormMailPhone>
						<TextMessage placeholder='Message'></TextMessage>
					</FormSection>
					<SendMessageButton>Send</SendMessageButton>
				</MessageSection>
				<ContactsCardSection>
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
				</ContactsCardSection>
			</FormSendMessage>
			<ContactsCardSectionMobile />
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
	gap: 22px;

	@media ${theme.media.tablet} {
		margin-bottom: 52px;
	}
`

const FormSendMessage = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	margin-bottom: 65px;

	height: 462px;
	width: 932px;

	background-color: ${theme.colors.cardsColor};

	@media ${theme.media.tablet} {
		height: 462px;
		width: 592px;
	}
`

const ContactUsSection = styled.section`
	min-height: 750px;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${theme.colors.primaryBg};
`

const MessageSection = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font-weight: 500;
		font-size: 36px;
		line-height: 1.36;
		color: ${theme.colors.font};

		padding-bottom: 22px;
	}
`
const FormSection = styled.div``

export const ContactsCardSection = styled.div`
	@media ${theme.media.tablet} {
		display: none;
	}
`

const TextMessage = styled.textarea`
	font-weight: 400;
	font-size: 13px;

	color: ${theme.colors.font};

	width: 428px;
	height: 150px;

	border-radius: 10px;
	border: none;

	background: #393838;

	margin-bottom: 36px;
	padding: 16px 28px;

	resize: none;

	&::placeholder {
		font-weight: 400;
		font-size: 13px;
		line-height: 1.36;

		text-transform: capitalize;

		color: #a5a5a5;
	}

	&:focus-visible {
		outline: 1px solid ${theme.colors.solidColor};
	}
`

const FormMailPhone = styled.div`
	display: flex;

	gap: 8px;

	margin-bottom: 24px;
`

const FormContacts = styled.input`
	color: ${theme.colors.font};

	font-weight: 400;
	font-size: 13px;

	width: 210px;
	height: 35px;

	border: none;
	border-radius: 10px;

	background: #393838;

	padding: 10px 30px;

	&::placeholder {
		font-weight: 400;
		font-size: 13px;
		line-height: 1.36;
		color: #a5a5a5;
		text-transform: capitalize;
	}

	&:focus-visible {
		outline: 1px solid ${theme.colors.solidColor};
	}
`
const SendMessageButton = styled.button`
	cursor: pointer;
	width: 118px;
	height: 42px;

	color: ${theme.colors.font};

	border-radius: 10px;

	background-color: ${theme.colors.accent};

	transition: all 0.2s ease;

	&:hover {
		background-color: ${theme.colors.font};
		color: ${theme.colors.primaryBg};
	}
`
export const ContactCard = styled.div`
	display: flex;
	justify-content: start;

	margin-bottom: 36px;

	gap: 26px;

	img {
		@media ${theme.media.tablet} {
			height: 72px;
			width: 72px;
			margin: 0;
		}
	}

	div {
		h4 {
			font-weight: 500;
			font-size: 16px;
			line-height: 1.36;
			color: ${theme.colors.font};

			@media ${theme.media.tablet} {
				font-weight: 500;
				font-size: 30px;
			}
		}

		span {
			font-weight: 400;
			font-size: 12px;
			line-height: 1.36;
			color: #8b8b8b;

			@media ${theme.media.tablet} {
				font-weight: 400;
				font-size: 22px;
			}
		}
	}
`
