function Card(props){
    const { title, bgColor } = props;

    return(
        <div className="card" style={{ backgroundColor: bgColor }}>
            <h2 className="card__title">{title}</h2>
        </div>
    )
}

export default Card;