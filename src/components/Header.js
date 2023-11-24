import '../css/header.css'
import { FaHome } from "react-icons/fa"
import Menu from './Menu'
import { useContext } from 'react'
import { SubjectContext } from '../App'

const Header = () => {

    const { setSubject } = useContext(SubjectContext)

    return (
        <>
            <div className="header">
                <div className='subjects'>
                    <button onClick={() => {
                        setSubject(null)
                        window.location.pathname = '/'
                    }}><FaHome /></button>
                    <select>
                        <option>Math</option>
                        <option>Science</option>
                        <option>English</option>
                        <option>Mapeh</option>
                    </select>
                </div>
                <Menu />
            </div>
        </>
    )
}

export default Header