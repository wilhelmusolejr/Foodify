import { Link } from "react-router-dom";

function Logo({ className = "" }) {
    return (
        <>
            <Link to={"/"} className={`logo ${className}`}>
                <p>Foodify.</p>
            </Link>
        </>
    );
}

export default Logo;
