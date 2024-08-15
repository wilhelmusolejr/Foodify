function CardParent({ children, className = "" }) {
    return (
        <>
            <div
                className={`card-parent recipe-parent d-flex gap-5 ${className}`}
            >
                {children}
            </div>
        </>
    );
}

export default CardParent;
