function SecondSection(props){
    const { bgColor } = props;

    return(
        <section className="secondSection" style={{ backgroundColor: bgColor }}>
            <div className="secondSection-content">
                <h2 className="secondSection-content__title">Что мы предлагаем</h2>
                <p className="secondSection-content__descr">В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.</p>
            </div>
            <div className="secondSection-img"></div>
        </section>
    )
}

export default SecondSection;