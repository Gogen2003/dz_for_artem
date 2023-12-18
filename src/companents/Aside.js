import '../design/Aside.css'
import { NavLink } from 'react-router-dom';
import image from '../images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import rabbit from '../images/rabbit.jpg'

function Aside() {
    return(
        <div className='aside'>
            
                <div className='aside__logo'><img id='logo' alt='logo' src= {image}/></div>
                <div className='aside__navbar'>
                    <ul className='aside__navbar__ul'>
                        <li><NavLink  to= '/'>Главная</NavLink></li>
                        <li><NavLink  to= 'aboutMe'>Обо мне</NavLink></li>
                        <li><NavLink  to= 'family'>Взаимодействие с семьями</NavLink></li>
                        <li><NavLink  to= 'activity'>Методическая деятельность</NavLink></li>
                        <li><NavLink  to= 'achievements'>Достижение воспитанников</NavLink></li>
                    </ul>
                </div>
                
                <div className='aside__footer'>
                    <div className='aside__footer__content'>
                        <ul className="aside__footer__ul">
                            <li id='frst'><a target='_blank' href='https://vk.com/id134138203'><FontAwesomeIcon icon={faVk} /></a></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                            <li><a target='_blank' href="https://t.me/qqtid"><FontAwesomeIcon icon={faTelegram} /></a></li>
                        </ul>
                    </div>
                </div>
           
        </div>
    )
};

export default Aside;