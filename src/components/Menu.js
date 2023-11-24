import '../css/menu.css'
import { AiOutlineMenu, AiOutlinePoweroff } from "react-icons/ai"
import { ddClose, ddOpen } from '../methods/navMethods'
import { GrClose } from "react-icons/gr"
import { BiUserCircle } from "react-icons/bi"
import { FaCogs } from "react-icons/fa"
import { auth } from '../App'

const Menu = () => {
    return (
        <>
            <div className='header-profiles'>
                <div className='profile'>
                    <div className='profile-info'>
                        <h3>{auth.currentUser.displayName}</h3>
                        <small>{auth.currentUser.email}</small>
                    </div>
                    <img src={auth.currentUser.photoURL} alt='profile' />
                    <button id='ddOpen' onClick={() => ddOpen()}><AiOutlineMenu className='ddIcn' /></button>
                    <button id='ddClose' onClick={() => ddClose()}><GrClose className='ddIcn' /></button>
                </div>
            </div>
            <div className='header-content' id='header-content'>
                <h3>Menu</h3>
                <div>
                    <button onClick={() => document.getElementById('profile').style.display = 'flex'}><BiUserCircle className='icn' /> Account</button>
                    <button onClick={() => document.getElementById('settings').style.display = 'flex'}><FaCogs className='icn' /> Settings</button>
                    <button onClick={() => auth.signOut()}><AiOutlinePoweroff color='red' className='icn' /> Logout</button>
                </div>
            </div>
        </>
    )
}

export default Menu