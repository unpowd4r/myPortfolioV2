import styled from 'styled-components'
import myPhoto from '../../../components/img/infoImg/me.svg'
import { MyInfo, MyPhoto } from './infoForMe.styled'

export const InfoForMe = () => {
	return (
		<MyInfo>
			<MyInfoCard>
				<MyName>
					I'm Frolov <br /> Sergei Mikhailovich
				</MyName>
				<ul>
					<li>I was born in Iran-Mashhad</li>
					<li>I’m 25 years old</li>
					<li>I have started my interest in this field from 2019</li>
					<li>I’m designer , video editor , web developer and ...</li>
					<li>My phone number in Iran +989212073348</li>
				</ul>
			</MyInfoCard>
			<MyPhoto src={myPhoto} alt='Photo' />
		</MyInfo>
	)
}

const MyInfoCard = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	width: 563px;
	height: 491px;
	background: linear-gradient(
		132deg,
		rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 71, 255, 0.05) 100%
	);
`

const MyName = styled.h2``
