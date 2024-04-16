import React from 'react'
import TopNav from '../components/TopNav'
import TaskCard from '../components/TaskCard'
import SideNav from '../components/SideNav'
import '../styles/MainPage.css'

function MainPage() {
    return (
        <div>
            <div className="topnav">
                <TopNav />
            </div>
            <div className="task-body">
                <section className="sidenav">
                    <SideNav />
                </section>
                <section className='tasks'>
                    <TaskCard />
                </section>
            </div>

        </div>
    )
}

export default MainPage
