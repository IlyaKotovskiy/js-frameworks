import Card from "./Card";

function CardList(){
    const titleArr = [
        {id: 1 ,title: "Годовое ТО", bgColor: "#22356F"},
        {id: 2, title: "Выравнивание колес", bgColor: "#0052C1"},
        {id: 3, title: "Настройка переключателей", bgColor: "#76B58B"}
    ]

    return(
        <div className="cardList">
            { titleArr.map((elem, index) =>
                <Card key={elem.id} title={elem.title} bgColor={elem.bgColor} />) }
        </div>
    )
}

export default CardList;