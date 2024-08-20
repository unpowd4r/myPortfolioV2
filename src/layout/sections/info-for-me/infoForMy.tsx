import styled from 'styled-components'
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
			<ContainerMyInfo>
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
				<PhotosContainer>
					<PhotoMap src={cardImage} />
					<MyPhoto src={myPhoto} alt='Photo' />
				</PhotosContainer>
			</ContainerMyInfo>
		</MyInfo>
	)
}

const ContainerMyInfo = styled.div`
	max-width: 1220px;
	width: 100%;
	min-height: 945px;

	display: flex;
	justify-content: center;
	align-items: center;
	/* flex-wrap: wrap; */
`

const PhotosContainer = styled.div`
	/* position: absolute; */
	/* top: 0; */
	/* left: 0; */
	/* z-index: 1; */
	display: flex;
	justify-content: center;
	align-items: center;
`
const PhotoMap = styled.img`
	min-width: 880px;
	min-height: 812px;
`

const IconsSocials = styled.div`
	display: flex;
	justify-content: flex-end;

	gap: 16px;

	padding-right: 24px;
	padding-top: 30px;
	padding-bottom: 18px;
`

const MyInfoCard = styled.div`
	/* position: relative; */
	/* z-index: 2; */
	display: flex;
	flex-direction: column;

	margin-top: 400px;
	padding-left: 58px;

	min-width: 562px;
	max-width: 562px;
	width: 100%;
	min-height: 490px;
	max-height: 490px;
	height: 100%;

	border: 1px solid ${theme.colors.font};
	border-radius: 100px 0 100px 0;
	backdrop-filter: blur(20px);
	background: linear-gradient(
		132deg,
		rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 71, 255, 0.05) 100%
	);

	ul {
		display: flex;
		flex-direction: column;
		gap: 10px;

		padding-left: 12px;
	}

	li {
		list-style-type: none;
		color: #393939;
		position: relative;
		padding-left: 20px;
		font-weight: 400;
		font-size: 20px;
		line-height: 1.36;
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
	}
`

const MyName = styled.h2`
	color: #393939;
	font-weight: 700;
	font-size: 56px;
	line-height: 1.36;

	margin-bottom: 22px;

	span {
		color: #2157f2;
	}
`
