import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Profile from "./Profile"
import Settings from "./Settings"

const Layout = () => {
    return (
        <>
            <div className="container">
                <Sidebar />
                <div className="page">
                    <Header />
                    <Outlet />
                </div>
            </div>
            <Profile />
            <Settings />
        </>
    )
}

export default Layout