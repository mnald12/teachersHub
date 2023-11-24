import '../css/students.css'
import { useState, useEffect } from "react"
import Loader from "../components/Loader"


const Students = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    if (isLoading) {
        return (
            <Loader />
        )
    }

    else {
        return (
            <div className='students'>

            </div>
        )
    }


}

export default Students