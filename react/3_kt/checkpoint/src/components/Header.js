export function Header({ autoScroll }) {
    return (
        <header>
            <div className="container">
                <button onClick={autoScroll}>Scroll to Footer!</button>
            </div>
        </header>
    )
}