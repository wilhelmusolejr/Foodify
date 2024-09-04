function Logo({ className = "" }) {
    return (
        <>
            <a href="/" className={`logo ${className}`}>
                <p>Foodify.</p>
            </a>
        </>
    );
}

export default Logo;
