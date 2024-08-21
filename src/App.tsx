import './App.css'
import { Header } from './layout/header/Header'
import { MainSkillMobileSection } from './layout/mobileSections/MainSkillMobileSection'
import { ContactSection } from './layout/sections/contactSection/ContactSection'
import { FixedElement } from './layout/sections/fixedElement/FixedElement'
import { Footer } from './layout/sections/footer/Footer'
import { InfoForMe } from './layout/sections/info-for-me/infoForMy'
import { Learning } from './layout/sections/learning/Learning'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Services } from './layout/sections/services/Services'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<MainSkillMobileSection />
			<Projects />
			<InfoForMe />
			<Services />
			<Learning />
			<ContactSection />
			<Footer />
			<FixedElement />
		</div>
	)
}

export default App
