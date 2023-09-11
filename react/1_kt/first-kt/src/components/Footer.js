function Footer(props){
    const { textColor } = props;

    return(
        <footer className="footer" style={{ color: textColor }}>
            <div className="footerImg"></div>
            <div className="footerContent">
                <h2 className="footerContent__title">Прокат велосипедов</h2>
                <p className="footerContent__descr">У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
            </div>
        </footer>
    )
}

export default Footer;