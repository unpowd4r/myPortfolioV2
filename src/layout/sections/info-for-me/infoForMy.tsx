import styled from 'styled-components'
import { Container } from '../../../components/Container'
import instagramIcon from '../../../components/icons/infoForMe-icons/ins.svg'
import arrowIcon from '../../../components/icons/infoForMe-icons/vector.svg'
import whatsappIcon from '../../../components/icons/infoForMe-icons/wa.svg'
import cardImage from '../../../components/img/infoImg/card.svg'
import myPhoto from '../../../components/img/infoImg/me.png'
import { theme } from '../../../styles/Theme'
import { MyInfo, MyPhoto } from './infoForMe.styled'

export const InfoForMe = () => {
	return (
		<MyInfo>
			<Container>
				<Wrapper>
					<MyInfoCard>
						<IconsSocials>
							<img src={whatsappIcon} alt='whatsapp' />
							<img src={instagramIcon} alt='instagram' />
							<img src={arrowIcon} alt='arrow' />
						</IconsSocials>
						<MyName>
							I'm <span>Frolov</span> <br /> Sergei Mikhailovich
						</MyName>
						<ul>
							<li>I was born in Iran-Mashhad</li>
							<li>I’m 25 years old</li>
							<li>I have started my interest in this field from 2019</li>
							<li>I’m designer , video editor , web developer and ...</li>
							<li>My phone number in Iran +989212073348</li>
						</ul>
					</MyInfoCard>
					<PhotoContainer>
						<MyPhoto src={myPhoto} alt='Photo' />
					</PhotoContainer>
				</Wrapper>
			</Container>
		</MyInfo>
	)
}

const Wrapper = styled.div`
	display: flex;

	background-image: url(${cardImage});
	background-repeat: no-repeat;
	background-position: 42px center;

	align-items: flex-end;
	min-height: 946px;

	@media screen and (max-width: 1300px) {
		min-height: 1108px;
		flex-direction: column;
		background-image: none;
	}

	@media ${theme.media.mobile} {
		min-height: 668px;
	}
`

const PhotoContainer = styled.div`
	position: absolute;
	max-width: 820px;
	max-height: 945px;
	right: -40px;
	bottom: 0;

	@media screen and (max-width: 1300px) {
		right: 0;
		bottom: -5px;
	}

	@media ${theme.media.tablet} {
		right: -100px;
		bottom: -5px;
	}

	@media ${theme.media.mobile} {
		right: -25px;
		bottom: -5px;
	}
`

const IconsSocials = styled.div`
	display: flex;
	justify-content: end;
	gap: 16px;

	@media ${theme.media.mobile} {
		display: none;
	}
`

const MyInfoCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: flex-end;

	min-width: 565px;
	height: 490px;
	padding: 10px 25px 45px 65px;
	margin-bottom: 55px;

	border: 1px solid ${theme.colors.font};
	border-radius: 100px 0 100px 0;
	backdrop-filter: blur(20px);
	background: linear-gradient(
		132deg,
		rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 71, 255, 0.05) 100%
	);

	@media screen and (max-width: 1300px) {
		align-self: center;
		margin-top: 70px;
	}

	@media ${theme.media.mobile} {
		padding: 65px 45px;
		margin-top: 48px;
		width: 302px;
		height: 265px;
		line-height: 1.2;

		border-radius: 54px 0 54px 0;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 10px;

		padding-left: 0px;
	}

	li {
		list-style-type: none;
		color: #393939;
		position: relative;
		padding-left: 20px;
		font-weight: 400;
		font-size: 20px;
		line-height: 1.36;

		@media ${theme.media.mobile} {
			font-size: 10px;
		}
	}

	ul li::before {
		content: '•';
		background-image: linear-gradient(180deg, #a6bcfa 0%, #2157f2 100%);
		border-radius: 50%;
		color: transparent;
		width: 18px;
		height: 18px;
		position: absolute;
		left: -12px;
		top: 50%;
		transform: translateY(-50%);

		@media ${theme.media.mobile} {
			width: 10px;
			height: 10px;
			left: 0px;
		}
	}

	@media ${theme.media.mobile} {
		min-width: 302px;
		min-height: 265px;
	}
`

const MyName = styled.h2`
	color: #393939;
	font-weight: 700;
	font-size: 48px;
	line-height: 1.2;

	margin-bottom: 22px;

	span {
		color: #2157f2;
	}

	ul {
		li {
			@media ${theme.media.mobile} {
				font-size: 10px;
			}
		}
	}

	@media ${theme.media.mobile} {
		font-size: 22px;
		margin-bottom: 12px;
		/* padding-top: 38px; */
	}
`
