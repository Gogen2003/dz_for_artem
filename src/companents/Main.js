import '../design/Main.css'
import photo from '../images/photo_1.svg'
import teddy from '../images/teddy3.jpg'
import autumn_fair from '../images/autumn_fair.svg';
import yammi_summer from '../images/yammi_summer.svg'
import file from '../pdf/family_reading.pdf'
import pdd from '../pdf/pdd.pdf'
import leto from '../pdf/leto.pdf'
import vospit from '../pdf/vospit.pdf'
import podgotovka from '../pdf/podgotovka.pdf'
import health from '../pdf/health.pdf'
import rules_povedenie from '../pdf/rules_povedenie.pdf'
function Main() {
    return (
        <div className="main">
            <div className="main__pdd">
                <div className="main__pdd__content">
                    <div className='main__pdd__content__zagolovok'><h3 id='med'>ПРАВИЛА ДОРОЖНОГО ДВИЖЕНИЯ</h3></div>
                    <hr className='main__pdd__content__line' />
                    <div  className='main_pdd_content__photo'><img   src={photo}/></div>
                    <hr className='main__pdd__content__line' />
                    <div className='main__pdd__content__rules'>
                        <div>
                            <h4 id='pdd__zag'>Правила поведения на тротуаре</h4>
                            <ul className='main__pdd__content__rules__ul'>
                                <li>Иди по тротуару, придерживаясь правой стороны.</li>
                                <li>Передвигайся по тротуару спокойным шагом. Не беги и не создавай помех другим пешеходам.</li>
                                <li>Двигаться по тротуару надо не более, чем два человека в ряд.</li>
                                <li>Обходи препятствие на тротуаре, не выходя на проезжую часть.</li>
                                <li>Не играй и не балуйся на тротуаре.</li>
                            </ul>
                        </div>
                        <div className='main__pdd_content__rules__teddy'><img id='teddy' src= {teddy}/></div>
                    </div>
                </div>
                <div></div>
                
            </div>
            <div className='main__autumn_fair'>
                <div className='main__autumn_fair__content'>
                    <div className='main__autumn_fair__content__zagolovok'><h3>ОСЕННЯЯ ЯРМАРКА</h3></div>
                    <hr className='main__autumn_fair__content__line' />
                    <div  className='main_autumn_fair_content__photo'><img   src={autumn_fair}/></div>
                    <hr className='main__autumn_fair__content__line' />
                    <div className='main__autumn_fair__content__description'>
                        <p>
                            Ярмарки на Руси зародились в незапамятные времена, они не просто прижились, но и стали традицией. Хорошей традицией стали ярмарки под названием “Дары осени”. И это очень символично. Ведь осень – самое благодатное время года.
                            Безусловно, главная цель ярмарки – установление тесной связи педагогов и родителей для успешного воспитания и развития детей. Также хотелось бы добавить, что ярмарка – это фольклорный праздник, который предполагает красочное зрелище, проходящее в непринужденной, веселой форме.
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className='main__vkusnoe_leto'>
                <div className='main__vkusnoe_leto__content'>
                    <div className='main__vkusnoe_leto__content__zagolovok'><h3>ВКУСНОЕ ЛЕТО</h3></div>
                    <hr className='main__vkusnoe_leto__content__line' />
                    <div className='main__vkusnoe_leto__content__photo'><img src={yammi_summer}/></div>
                    <hr className='main__vkusnoe_leto__content__line' />
                    <div className='main__vkusnoe_leto__content__description'>
                        <p>
                            Летом дети максимальное время должны проводить на воздухе. А родители обязаны помнить, что солнце, воздух и вода – всё должно быть в меру, с пользой для здоровья и развития ребёнка. Полезно играть с детьми на свежем воздухе и родителям! Это позволяет им расслабиться, вернуться в детство, получить массу положительных эмоций, дозу физической нагрузки, а самое, главное – провести весело время со своими детьми, показать, в какие игры они играли в детстве, научить ребёнка играть! Малышам больше всего хочется побегать, придумать новые активные игры, наблюдать за тем, что их окружает.
                        </p>
                    </div>
                </div>
            </div>
            <div className='main__footer'>
                <div className='main__footer__content'>
                     <div className='main__footer__content__zagolovok'><h3>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</h3></div>
                     <div className='main__footer__content__description'>
                       <div className='main__footer__content__description__block1'>
                            <ul>
                                <li><a href={file} download>Семейное чтение</a></li>
                                <li><a href={pdd} download>ПДД</a></li>
                                <li><a href={leto} download>Вкусное лето</a></li>
                            </ul>
                       </div>
                       <div className='main__footer__content__description__block2'>
                            <ul>
                                <li><a href={vospit} download>Воспитание детей</a></li>
                                <li><a href={podgotovka} download>Подготовка к школе</a></li>
                            </ul>
                       </div>
                       <div className='main__footer__content__description__block3'>
                            <ul>
                                <li><a href={health} download>Здоровое питание</a></li>
                                <li><a href={rules_povedenie} download>Поведение в общественных местах</a></li>
                                
                            </ul>
                       </div>
                     </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main