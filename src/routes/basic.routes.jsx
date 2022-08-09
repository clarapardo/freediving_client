import { Routes, Route } from "react-router-dom"

import HomePage from './../pages/basic/home/homePage'
import GalleryPage from "../pages/basic/gallery/galleryPage"
import PhotoDetailsPage from "../pages/basic/photoDetails/photoDetailsPage"
import ControlPanel from "../pages/private/controlPanel"
import CheckoutPage from "../pages/basic/checkout/checkoutPage"


const BasicRoutes = ({ setShow }) => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage setShow={setShow} />} />
            <Route path="/photoDetails/:idPhoto" element={<PhotoDetailsPage setShow={setShow} />} />
            <Route path="/checkout" element={<CheckoutPage />} />


            <Route path="*" element={<h1>Esto es un 404, melón</h1>} />

            <Route path="/controlPanel" element={<ControlPanel />} />

        </Routes>
    )
}

export default BasicRoutes