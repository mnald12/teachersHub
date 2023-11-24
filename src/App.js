import { BrowserRouter, Routes, Route } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from "./pages/Dashboard"
import Layout from './components/Layout'
import Students from './pages/Students'
import { firebaseConfig } from './firebase/db'
import Lessonplan from './pages/Lessonplan'
import Grades from './pages/Grades'
import Attendances from './pages/Attendances'
import { createContext, useEffect, useState } from 'react'
import Home from './pages/Home'
import { insertOne, isNewUser } from './methods/methods'
import Loader from './components/Loader'

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const Login = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 2000)
  })

  if (isReady) {
    return (
      <button onClick={() => signInWithGoogle()}>Sign In with Google</button>
    )
  }
  else {
    return <Loader />
  }

}

const SubjectContext = createContext(null)

function App() {

  const [user] = useAuthState(auth)
  const [subject, setSubject] = useState(null)

  useEffect(() => {
    if (user) {
      const u = isNewUser(auth.currentUser.uid)
      u.then((res) => {
        if (res) {
          const newUser = auth.currentUser
          insertOne('users', {
            userId: newUser.uid,
            userName: newUser.displayName,
            userAvatar: newUser.photoURL,
            userTitle: 'teacher',
            userEmail: newUser.email,
            userTheme: 'default',
            userStatus: {
              status: 'trial',
              startDate: Date(),
              daysLeft: 30
            },
            subjects: []
          })
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  }, [user])

  if (user) {
    if (subject) {
      return (
        <>
          <SubjectContext.Provider value={{ subject, setSubject }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/students' element={<Students />} />
                  <Route path='/attendances' element={<Attendances />} />
                  <Route path='/lessonplan' element={<Lessonplan />} />
                  <Route path='/grades' element={<Grades />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SubjectContext.Provider>
        </>
      )
    }
    else {
      return (
        <SubjectContext.Provider value={setSubject}>
          <Home />
        </SubjectContext.Provider>
      )
    }
  }
  else {
    return <Login />
  }
}

export default App
export { auth, SubjectContext }