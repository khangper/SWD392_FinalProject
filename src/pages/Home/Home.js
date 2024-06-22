import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'
import Footer from '../../components/Footer/Footer'
const Home = ({sidebar}) => {
  return (
    <>
     <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar ? "" : "large-container"}`}>
        Livestream
      </div>
    </>

  )
}

export default Home