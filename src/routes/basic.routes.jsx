import { Routes, Route } from "react-router-dom"

import HomePage from './../pages/basic/home/homePage'
import ControlPanel from "../pages/basic/home/private/controlPanel"

const BasicRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />


            <Route path="/controlPanel" element={<ControlPanel />} />

        </Routes>
    )
}

export default BasicRoutes