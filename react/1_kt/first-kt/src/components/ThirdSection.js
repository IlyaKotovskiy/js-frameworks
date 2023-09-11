function ThirdSection(props){
    const { textColor } = props;

    return(
        <section className="thirdSection" style={{ color: textColor }}>
            <p className="thirdSection__descr">
                Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.
            </p>
            <p className="thirdSection__descr">
                А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
            </p>
        </section>
    )
}

export default ThirdSection;