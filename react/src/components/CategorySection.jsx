import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function CategorySection() {
    const [loading, setLoading] = useState(true);
    const [listCategory, setListCategory] = useState([
        {
            name: "all",
            image: null,
        },
        {
            name: "dessert",
            image: "https://img.spoonacular.com/recipes/1098347-556x370.jpg",
        },
        {
            name: "lunch",
            image: "https://img.spoonacular.com/recipes/633651-556x370.jpg",
        },
        {
            name: "main course",
            image: "https://img.spoonacular.com/recipes/634715-556x370.jpg",
        },
        {
            name: "main dish",
            image: "https://img.spoonacular.com/recipes/715421-556x370.jpg",
        },
        {
            name: "dinner",
            image: "https://img.spoonacular.com/recipes/657031-556x370.jpg",
        },
    ]);

    return (
        <>
            <section className="category-recipe my-5 py-5">
                <div className="container-fluid">
                    <h2 className="text-capitalize mb-5">Popular Categories</h2>

                    {/* card parent */}
                    <div className="card-parent recipe-category d-flex flex-sm-wrap justify-content-sm-center gap-5">
                        {loading ? (
                            <Loader />
                        ) : (
                            listCategory.map((currentCategory, index) => (
                                // card
                                <div
                                    key={index}
                                    className="card text-center cursor-pointer"
                                >
                                    <div className="img-parent">
                                        <img
                                            src={
                                                currentCategory.image
                                                    ? currentCategory.image
                                                    : fried
                                            }
                                            alt=""
                                            className="rounded-circle shadow"
                                        />
                                    </div>
                                    <h3 className="mt-2 text-capitalize">
                                        {currentCategory.name}
                                    </h3>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategorySection;
