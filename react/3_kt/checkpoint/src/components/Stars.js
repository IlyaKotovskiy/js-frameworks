export function Stars({ rating }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="stars">
            {[...Array(fullStars)].map((_, index) => (
                <span key={index} className="fa fa-star active"></span>
            ))}
            {halfStar && <span className="fa fa-star-half-o active"></span>}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="fa fa-star"></span>
            ))}
        </div>
    );
}
