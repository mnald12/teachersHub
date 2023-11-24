import { useEffect, useState } from 'react'
import '../css/dashboard.css'
import Loader from '../components/Loader'
const Dashboard = () => {

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
            <h1>Dashboard</h1>
        )
    }
}

export default Dashboard