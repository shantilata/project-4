import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from'../Component/Home/Home'
// import DiffrentTopic from '../Component/Topic/DiffrentTopic/DiffrentTopic'
import DiffrentTopic from '../Component/Topic/DiffrentTopic/DiffretTopic'
import Contact from '../Component/Contact/Contact'
import Header from '../Layout/Header/Header'
import Pnf from '../Layout/Page_Not_Found/Pnf'
import SubTopic from '../Component/Topic/Sub_topic/SubTopic'
import Details from '../Component/Topic/Details/Details'
import './RouteRouting.css'
const RouteRouting = () => {
  return (<div className='LayoutContainer'>
    <Router>
        <Header/>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="topic" element={<DiffrentTopic/>}/>
            <Route path="topic/subtopic/:tid" element={<SubTopic/>}/>
            <Route path="topic/subtopic/:tid/details/:st_id" element={<Details />}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<Pnf/>}/>

        </Routes>
    </Router>
    </div>
  )
}

export default RouteRouting