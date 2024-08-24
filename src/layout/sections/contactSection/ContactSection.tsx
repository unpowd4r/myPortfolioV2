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
			<ContainerContactUs>
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
			</ContainerContactUs>
		</ContactUsSection>
	)
}

const ContainerContactUs = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	max-width: 1220px;
	width: 100%;
	min-height: 100%;

	padding: 0 15px;
	margin: 0 auto;

	@media ${theme.media.tablet} {
		max-width: 560px;
		width: 100%;
	}

	@media ${theme.media.mobile} {
		max-width: 354px;
		width: 100%;
	}
`

const IconsSocial = styled.img`
	margin-left: 20px;
	&:first-child {
		margin-left: 0px;
	}
`

const IconsSocialSection = styled.div`
	display: flex;
	justify-content: center;

	margin-bottom: 198px;

	gap: 10px;

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
	max-width: 932px;
	width: 100%;

	background-color: ${theme.colors.cardsColor};

	@media ${theme.media.tablet} {
		height: 462px;
		max-width: 592px;
		width: 100%;

		padding: 10px 25px;
	}

	@media ${theme.media.mobile} {
		max-width: 364px;
		width: 100%;
		height: 282px;

		padding: 10px 10px;
	}
`

const ContactUsSection = styled.section`
	min-height: 750px;
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${theme.colors.primaryBg};
`

const MessageSection = styled.div`
	display: flex;
	flex-direction: column;

	@media ${theme.media.mobile} {
		padding: 30px 20px;
	}

	h2 {
		font-weight: 500;
		font-size: 36px;
		line-height: 1.36;
		color: ${theme.colors.font};

		padding-bottom: 22px;

		@media ${theme.media.mobile} {
			font-size: 22px;
			padding-bottom: 14px;
		}
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

	max-width: 428px;
	width: 100%;
	height: 150px;

	border-radius: 10px;
	border: none;

	background: #393838;

	margin-bottom: 36px;
	padding: 16px 28px;

	resize: none;

	@media ${theme.media.mobile} {
		max-width: 262px;
		width: 100%;
		height: 94px;
		padding: 10px 16px;
	}

	&::placeholder {
		font-weight: 400;
		font-size: 13px;
		line-height: 1.36;

		text-transform: capitalize;

		color: #a5a5a5;

		@media ${theme.media.mobile} {
			font-size: 7px;
		}
	}

	&:focus-visible {
		outline: 1px solid ${theme.colors.solidColor};
	}
`

const FormMailPhone = styled.div`
	display: flex;
	max-width: 418px;
	width: 100%;

	gap: 8px;

	margin-bottom: 24px;

	@media ${theme.media.mobile} {
		max-width: 265px;
	}
`

const FormContacts = styled.input`
	color: ${theme.colors.font};

	font-weight: 400;
	font-size: 13px;

	width: 100%;
	height: 35px;

	border: none;
	border-radius: 10px;

	background: #393838;

	padding: 10px 30px;

	@media ${theme.media.mobile} {
		height: 22px;
		width: 100%;

		border-radius: 6px;
		padding: 6px 16px;
	}

	&::placeholder {
		font-weight: 400;
		font-size: 13px;
		line-height: 1.36;
		color: #a5a5a5;
		text-transform: capitalize;

		@media ${theme.media.mobile} {
			font-size: 7px;
		}
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

	@media ${theme.media.mobile} {
		width: 72px;
		height: 26px;

		font-size: 9px;
	}

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
			max-height: 72px;
			height: 100%;
			max-width: 72px;
			width: 100%;

			@media ${theme.media.mobile} {
				max-width: 45px;
				width: 100%;
				max-height: 45px;
				height: 100%;
			}
		}
	}

	div {
		overflow: hidden;
		span {
			display: block;
			text-overflow: ellipsis;
			font-weight: 400;
			font-size: 12px;
			line-height: 1.36;
			color: #8b8b8b;
			text-overflow: ellipsis;

			@media ${theme.media.tablet} {
				font-weight: 400;
				font-size: 22px;
			}
			@media ${theme.media.mobile} {
				font-size: 14px;
			}
		}
		h4 {
			font-weight: 500;
			font-size: 16px;
			line-height: 1.36;
			color: ${theme.colors.font};

			@media ${theme.media.tablet} {
				font-weight: 500;
				font-size: 30px;
			}
			@media ${theme.media.mobile} {
				font-size: 18px;
			}
		}
	}
`
