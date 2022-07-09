import { Routes, Route } from "react-router-dom"

import HomePage from './../pages/basic/home/homePage'

const BasicRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about-me" element={<HomePage />} />
            <Route path="/e-shop" element={<HomePage />} />
            <Route path="/terms-and-conditions" element={<HomePage />} /> */}
        </Routes>
    )
}

export default BasicRoutes