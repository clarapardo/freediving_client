import './homePage.css'
import Hero from './../../../components/Hero/Hero'
import MacroSection from '../../../components/MacroSection/MacroSection'


const HomePage = () => {

    return (
        <div className="home-page">
            <Hero />
            <MacroSection />
        </div>
    )
}

export default HomePage