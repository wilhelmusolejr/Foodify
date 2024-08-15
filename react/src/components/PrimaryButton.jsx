function PrimaryButton({ children, className = "" }) {
    return (
        <>
            <button className={`btn btn-primary ${className}`}>
                {children}
            </button>
        </>
    );
}

export default PrimaryButton;
