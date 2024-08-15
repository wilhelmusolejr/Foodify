function RecipeTag({ text, className = "" }) {
    return (
        <>
            <span className={`badge bg-primary p-2 ${className}`}>{text}</span>
        </>
    );
}

export default RecipeTag;
