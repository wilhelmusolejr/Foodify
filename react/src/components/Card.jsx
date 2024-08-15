import React from "react";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faStar,
    faMagnifyingGlass,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faSmile, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <div className="card shadow cursor-pointer">
                <img
                    className="card-img-top"
                    src={recipe.image}
                    alt="Card image cap"
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
            </div>
        </>
    );
}

export default Cards;
