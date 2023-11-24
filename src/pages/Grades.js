import { useEffect, useState } from 'react'
import '../css/dashboard.css'
import Loader from '../components/Loader'
const Grades = () => {

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
            <><h1>Grades</h1>
            </>

        )
    }
}

export default Grades