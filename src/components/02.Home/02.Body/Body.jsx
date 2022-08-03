import './Body.css'
import MacroPreview from './Macro-preview/Macro-preview'
import GalleryPreview from './Gallery-preview/Gallery-preview'
import ServicesPreview from './Services-preview/Services-preview'
import AboutMePreview from './AboutMe-preview/AboutMe-preview'
import SocialProof from '../02.Body/SocialProof/SocialProof'


const Body = () => {

    return (
        <div className="Body">
            <AboutMePreview />
            <GalleryPreview />
            <ServicesPreview />
            {/* <MacroPreview /> */}
            <SocialProof />

        </div>
    )
}

export default Body