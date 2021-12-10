import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Cards from './Cards'
import Courses from './Courses'
import Events from './Events'
import Footer from './Footer'
import About from './About'
import Message from './Message'
import './style.css'

const Main = () => {
 
    return (
        <div >
            <Banner/>
            <Cards/>
             <About/>
            <Courses/>
            <div><h3 className= 'text-center section-title'> ~~~ Events ~~~</h3></div>
            <div className = 'cor-container1' style = {{margin:50}}><Events/></div>
            <Message/>
            <Footer/> 
        </div>
    )
}

export default Main;
