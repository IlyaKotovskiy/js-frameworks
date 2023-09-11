import DinoImg from '../../images/dino.png';

function MainScreen(){
    return(
        <div className="mainScreen">
            <div className="mainScreen__left">
                <h1 className="mainScreen__title">Веломастерская “Велозар”</h1>
                <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <div className="mainScreen__right">
                <img src={DinoImg} alt="Динозавр"/>
            </div>
        </div>
    )
}

export default MainScreen;