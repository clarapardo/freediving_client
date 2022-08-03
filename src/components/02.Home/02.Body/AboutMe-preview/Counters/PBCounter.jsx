import { useEffect, useState } from 'react'



const PBCounter = () => {

    // TIME COUNTER
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [time, setTime] = useState(0)
    let totalMinutes = 7
    let totalSeconds = 17
    let totalTime = totalMinutes * 60 + totalSeconds


    useEffect(() => {

        if (time < totalTime) {
            timeCounter()
            timeFormatter()
        }
    }, [time])

    const timeCounter = () => setTimeout(() => setTime(time + 1), 3)

    const timeFormatter = () => {

        if (time % 60 === 0 && time !== 0) {
            setMinutes(Math.floor(time / 60))
        } else {
            setSeconds(time - minutes * 60)
        }
    }



    // DEPTH COUNTER
    const [depth, setDepth] = useState(0)
    let totalDepth = 70


    useEffect(() => {
        if (depth < totalDepth) depthCounter()
    }, [depth])

    const depthCounter = () => setTimeout(() => setDepth(depth + 1), 35)



    return (
        <div className="Counter-div">
            <div className="PB">
                <p>{minutes < 10 ? `0${minutes}` : minutes}'
                    {seconds < 10 ? `0${seconds}` : seconds}''
                </p>
                <h6>-</h6>
                <p>{depth < 10 ? `0${depth}` : depth} m.</p>
            </div>

            <h6>FREEDIVING PB</h6>
        </div>
    )
}



export default PBCounter
