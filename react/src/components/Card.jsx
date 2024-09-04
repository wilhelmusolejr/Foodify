// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Cards({ recipe }) {
    let recipe_title = 15;
    let recispe_summary = 120;

    const stringCutter = (text, length) => {
        if (text.length > length) {
            return text.slice(0, length) + "..."; // Use slice to get the substring
        }

        return text;
    };

    return (
        <>
            <a
                href={`/recipe/${recipe.id}`}
                className="card shadow cursor-pointer text-decoration-none"
            >
                <img
                    className="card-img-top"
                    src={recipe.image}
                    alt={recipe.title}
                />
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h5 className="card-title ">
                            {stringCutter(recipe.title, recipe_title)}
                        </h5>
                        <div
                            className={`rate d-flex justify-content-center align-items-center ${recipe.healthStatus}`}
                        >
                            <p className="text-light d-none">
                                <b>{recipe.healthScore}</b>
                            </p>
                        </div>
                    </div>
                    <p
                        className="card-text mt-2"
                        dangerouslySetInnerHTML={{
                            __html: stringCutter(
                                recipe.summary,
                                recispe_summary
                            ),
                        }}
                    />
                </div>

                <div className="card-bookmark d-flex align-items-center justify-content-center shadow-lg cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </a>
        </>
    );
}

export default Cards;
