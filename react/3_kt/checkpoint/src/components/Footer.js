import { forwardRef } from "react";

export const Footer = forwardRef((props, ref) => {
    return (
        <footer ref={ref}>
            <div className="container">
                <p>Its Footer!</p>
            </div>
        </footer>
    )
});