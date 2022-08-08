import { Routes, Route } from "react-router-dom"

import HomePage from './../pages/basic/home/homePage'
import GalleryPage from "../pages/basic/gallery/galleryPage"
import PhotoDetailsPage from "../pages/basic/photoDetails/photoDetailsPage"
import ControlPanel from "../pages/private/controlPanel"

const BasicRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/photoDetails/:idPhoto" element={<PhotoDetailsPage />} />




            <Route path="/controlPanel" element={<ControlPanel />} />

        </Routes>
    )
}

export default BasicRoutes