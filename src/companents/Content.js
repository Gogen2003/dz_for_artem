import '../design/Content.css'
import {Route, Routes} from 'react-router-dom';
import Main from './Main';
import AboutMe from './AboutMe';
import Family from './Family';
import Achievements from './Achievements';
import Activity from './Activity';
function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route path='/' element = {<Main />}></Route>
                <Route path='aboutMe' element = {<AboutMe/>}></Route>
                <Route path='family' element = {<Family />}></Route>
                <Route path='activity' element = {<Activity />}></Route>
                <Route path='achievements' element = {<Achievements />}></Route>
            </Routes>
        </div>
    )
};


export default Content;
