import './Counters.css'
import { useEffect, useState } from 'react'



const CertificationsCounter = () => {

    const [position, setPosition] = useState(0)
    const certifications = ['SSI 1', 'SSI 2', 'MW1', 'MW2', 'MW3', 'MW4']

    useEffect(() => {

        if (position < certifications.length - 1) positionCounter()
    }, [position])


    const positionCounter = () => setTimeout(() => setPosition(position + 1), 450)




    return (
        <div className="Counter-div">
            <div className="Certifications">
                <p>{certifications[position]}</p>
            </div>
            <h6>CERTIFICATIONS</h6>
        </div>
    )
}



export default CertificationsCounter