import '../css/sidebar.css'
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineAssignment } from "react-icons/md";
import { BiSolidDashboard, BiSolidSchool } from "react-icons/bi"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { GiTeacher } from "react-icons/gi"
import { TbFileCertificate, TbBooks, TbAdjustmentsStar } from "react-icons/tb";
import { RiFolderChartFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { fold, unFold } from '../methods/navMethods';

const Sidebar = () => {

    const location = useLocation()

    return (
        <>
            <div className="sidebar" id="sidebar">
                <div className="btn-container">
                    <div className="nav-brand" id="brand">
                        <div className='brand-logo'><GiTeacher /></div>
                        <h3 id="brandname">Guro'sHub</h3>
                        <button onClick={() => fold()} className="menu" id="menuFold"><AiOutlineLeft /></button>
                        <button onClick={() => unFold()} className="menu" id="menuUnfold"><AiOutlineRight /></button>
                    </div>
                    <div className='btns'>
                        <Link className={location.pathname === '/dashboard' || location.pathname === '/' ? 'side-btn active' : 'side-btn'} to='/dashboard'><BiSolidDashboard className='icn' /> <span>Dashboard</span></Link>
                        <Link className={location.pathname === '/students' ? 'side-btn active' : 'side-btn'} to='/students'><IoIosPeople className='icn' /> <span>Students</span></Link>
                        <Link className={location.pathname === '/attendances' ? 'side-btn active' : 'side-btn'} to='/attendances'><TbFileCertificate className='icn' /> <span>Attendance</span></Link>
                        <Link className={location.pathname === '/lessonplan' ? 'side-btn active' : 'side-btn'} to='/lessonplan'><RiFolderChartFill className='icn' /> <span>Lesson Plan</span></Link>
                        <Link className={location.pathname === '/grades' ? 'side-btn active' : 'side-btn'} to='/grades'><TbAdjustmentsStar className='icn' /> <span>Grades</span></Link>
                        <Link className={location.pathname === '/assignments' ? 'side-btn active' : 'side-btn'} to='/assignments'><MdOutlineAssignment className='icn' /> <span>Assignments</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
