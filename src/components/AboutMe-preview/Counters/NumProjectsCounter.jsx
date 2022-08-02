import './Counters.css'
import { useEffect, useState } from 'react'


const NumProjectsCounter = () => {

    const [number, setNumber] = useState(0)
    let totalNum = 83

    useEffect(() => {

        if (number < totalNum) counter()

    }, [number])

    const counter = () => {

        setTimeout(() => {
            setNumber(number + 1)
        }, 30)
    }



    return (
        <div className="Counter-div">
            <p>{number}</p>
            <h6>PROJECTS</h6>
        </div>
    )

}

export default NumProjectsCounter