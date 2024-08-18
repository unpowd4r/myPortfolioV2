import { Buttons } from './buttons/Buttons'
import { Photo } from './photo/Photo'
import { MainPhoto, MyDescMain } from './styled/StyledDesc'
import { NameAndTitle } from './titleAndName/NameAndTitle'

export const MainDesc = () => {
	return (
		<MainPhoto>
			<Photo />
			<MyDescMain>
				<NameAndTitle />
				<Buttons />
			</MyDescMain>
		</MainPhoto>
	)
}
