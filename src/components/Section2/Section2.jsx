import './Section2.css'
import MacroSection from '../MacroSection/MacroSection'
import GalleryPreview from '../Gallery-preview/Gallery-preview'
import ServicesPreview from '../Services-preview/Services-preview'
import Prueba from '../Prueba/Prueba'



const Section2 = () => {

    return (
        <div className="Section2">
            <Prueba />
            {/* <img src="/img/background/oceanSand.jpg" /> */}
            <GalleryPreview />
            <ServicesPreview />
            <MacroSection />
        </div>
    )
}

export default Section2