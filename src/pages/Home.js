import '../css/home.css'
import '../css/modal.css'
import { AiOutlinePlus } from "react-icons/ai"
import Menu from '../components/Menu'
import { useContext, useState } from 'react'
import { SubjectContext } from '../App'
import Profile from '../components/Profile'
import Settings from '../components/Settings'
import { auth } from '../App'
import uniqid from 'uniqid'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { BsJournalPlus } from "react-icons/bs";

const NewSubject = () => {

    const subId = uniqid()

    const newSubject = {
        id: subId,
        subjectName: '',
        gradeLevel: '',
        school: '',
        studentsBase: `students${auth.currentUser.uid}${subId}`,
        attendanceBase: `attendance${auth.currentUser.uid}${subId}`,
        gradeBase: `grade${auth.currentUser.uid}${subId}`,
        dateCreated: Date()
    }

    return (
        <div className="modal" id="subject">
            <div className="modal-content-small">
                <button className='modal-close-btn' onClick={() => document.getElementById('subject').style.display = 'none'}>
                    <AiOutlineCloseCircle color='red' />
                </button>
                <div className='content-body'>
                    <h3><BsJournalPlus /> <span>New_Subject</span></h3>
                    <div>
                        <label>Subject Name : </label>
                        <input onChange={(e) => newSubject.subjectName = e.target.value} type='text' />
                        <br />
                        <label>Grade Level : </label>
                        <input onChange={(e) => newSubject.gradeLevel = e.target.value} type='text' />
                        <br />
                        <label>School : </label>
                        <input onChange={(e) => newSubject.school = e.target.value} type='text' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {

    const setSubject = useContext(SubjectContext)

    const subId = uniqid()

    const newSubject = {
        id: subId,
        subjectName: '',
        gradeLevel: '',
        school: '',
        studentsBase: `students${auth.currentUser.uid}${subId}`,
        attendanceBase: `attendance${auth.currentUser.uid}${subId}`,
        gradeBase: `grade${auth.currentUser.uid}${subId}`,
        dateCreated: Date()
    }

    return (
        <>
            <div className="home">
                <div className="home-header">
                    <div className='navbar'>
                        <h3 className='brand'>Guro'sHub</h3>
                        <Menu />
                    </div>
                </div>
                <div className="home-content">
                    <h4>Your Subjects</h4>
                    <div className='subjects'>
                        <button onClick={() => document.getElementById('subject').style.display = 'flex'}>
                            <div><AiOutlinePlus size={60} /></div>
                            <div>Add Subject</div>
                        </button>
                        <button onClick={() => setSubject(newSubject)}>
                            Science III
                        </button>
                        <button>
                            Math II
                        </button>
                        <button>
                            Math II
                        </button>
                        <button>
                            Math II
                        </button>
                        <button>
                            Math II
                        </button>
                        <button>
                            Math II
                        </button>
                        <button>
                            Math II
                        </button>
                        <button>
                            Math II
                        </button>
                    </div>
                </div>
            </div>
            <Profile />
            <Settings />
            <NewSubject />
        </>
    )
}

export default Home