import { useEffect, useState } from "react";

// asset
import pizzaBanner from "../assets/pizza.png";
import shareBanner from "../assets/share_banner.jpg";
import fried from "../assets/RandomFood/fried.jpg";

import Card from "../components/Card";
import Loader from "../components/Loader";
import CardParent from "../components/CardParent";
import PrimaryButton from "../components/PrimaryButton";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

import recipeData from "../data/recipe.json";

const apiKey = import.meta.env.VITE_API_KEY;

let api_key = `&apiKey=${apiKey}`;
let base_url = `https://api.spoonacular.com`;
let random_recipe = `${base_url}/recipes/random?number=100${api_key}`;
let number_recipes = 32;
let debug = false;

function Home() {
    document.title = "Home | Foodify";

    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [trendingRecipes, setTrendingRecipes] = useState([]);
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
    const [toast, setToast] = useState(false);

    const [category, setCategory] = useState("all");
    const [exploreRecipes, setExploreRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(random_recipe);
                const data = await response.json();

                console.log(data);
                if (data.code === 402) {
                    setRecipes(recipeData);
                    setTrendingRecipes(getRandomElements(recipeData, 4));
                    setExploreRecipes(getRandomElements(recipeData, 30));
                    setLoading(false);
                    setToast(true);
                }

                data.recipes.forEach((recipe) => {
                    recipe["healthStatus"] = getColorScheme(recipe.healthScore);
                });

                setRecipes(data.recipes);
                setTrendingRecipes(getRandomElements(data.recipes, 4));
                setExploreRecipes(
                    getRandomElements(data.recipes, number_recipes)
                );
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the recipe:", error);
            }
        };

        let data = recipeData;
        if (debug) {
            data.forEach((recipe) => {
                recipe["healthStatus"] = getColorScheme(recipe.healthScore);
            });

            setRecipes(data);
            setTrendingRecipes(getRandomElements(data, 4));
            setExploreRecipes(getRandomElements(data, 30));
            setLoading(false);
        } else {
            fetchRecipe();
        }
    }, []);

    const getColorScheme = (value) => {
        if (value >= 1 && value <= 20) {
            return "bad"; // Bad (Red)
        } else if (value >= 21 && value <= 40) {
            return "not-good"; // Not Good (Orange)
        } else if (value >= 41 && value <= 60) {
            return "good"; // Good (Yellow)
        } else if (value >= 61 && value <= 80) {
            return "very-good"; // Very Good (Light Green)
        } else if (value >= 81 && value <= 100) {
            return "exellent"; // Excellent (Green)
        } else {
            return "text-light"; // Default (White) if out of range
        }
    };

    const handleCategoryClick = (categorySelected) => {
        setLoading(true);
        setCategory(categorySelected);

        let temp = [];

        if (categorySelected == "all") {
            temp = recipes;
        } else {
            recipes.forEach((recipe) => {
                if (recipe.dishTypes.includes(categorySelected)) {
                    temp.push(recipe);
                }
            });
        }

        setExploreRecipes(getRandomElements(temp, number_recipes));
        setLoading(false);
    };

    const getRandomElements = (array, numElements) => {
        if (array.length <= numElements) {
            return array;
        }

        return array
            .sort(() => Math.random() - 0.5) // Shuffle the array randomly
            .slice(0, numElements); // Get the first numElements items
    };

    return (
        <>
            <Navigator />

            {/* toast-limit */}
            {toast && (
                <div
                    className="toast align-items-center show position-fixed bottom-0 end-0 z-3 text-danger"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <div className="toast-body">API Limit reached</div>
                        <button
                            type="button"
                            className="btn-close me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                </div>
            )}

            <header>
                <div className="container-fluid">
                    <div className="container-fluid header-container py-5 mt-3 d-flex flex-md-wrap-reverse align-items-end">
                        {/* 1 */}
                        <div className="text-light z-1">
                            <h1>
                                Discover, Share, and Savor Delicious Recipes
                                from Around the World.
                            </h1>
                            <p className="mt-2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Placeat consectetur fugit
                                dignissimos voluptas aut dolore facere,
                                temporibus suscipit necessitatibus dolores?
                            </p>
                            <PrimaryButton className="mt-5">
                                View recipes
                            </PrimaryButton>
                        </div>
                        {/* 2 */}
                        <div className="pizza-banner">
                            <img
                                src={pizzaBanner}
                                alt=""
                                className="position-absolute img-with-shadow"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <section className="trending-recipe my-5 py-5">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="text-capitalize">Trending recipes</h2>
                        <a href="#">View more</a>
                    </div>

                    <CardParent className="justify-content-xxl-center">
                        {loading ? (
                            <Loader />
                        ) : (
                            trendingRecipes.map((recipe, index) => (
                                <Card key={index} recipe={recipe} />
                            ))
                        )}
                    </CardParent>
                </div>
            </section>
            <section className="share-recipe my-5 py-5 position-relative">
                <div className="container-fluid d-lg-flex align-items-center justify-content-center gap-5">
                    {/* 1 */}
                    <div className="share-parent">
                        <img src={shareBanner} alt="" className="shadow" />
                    </div>

                    {/* 2 */}
                    <div className="share-text text-center flex-grow-1">
                        <h2 className="text-capitalize ">Share your recipes</h2>
                        <p className="text-start mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quaerat soluta cum et dolorum corporis. Nihil
                            deserunt tempore fugiat aperiam sequi nulla tenetur
                            repellendus natus saepe, at qui ad perspiciatis.
                            Quo?
                        </p>

                        <PrimaryButton className="mt-5">
                            Share now !
                        </PrimaryButton>
                    </div>
                </div>
            </section>
            <section className="explore-recipe gradient-to-top my-5 py-5">
                <div className="container-fluid">
                    <h2 className="text-capitalize mb-5">Explore our recipe</h2>
                    <p className="mt-3 paragraph">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident quae mollitia quo nobis eveniet esse
                        corrupti? Fugiat perspiciatis, tempore quisquam
                        temporibus obcaecati ea itaque error quos nisi nostrum
                        quasi non.
                    </p>

                    {/* card parent */}
                    <div className="card-parent recipe-category d-flex justify-content-xl-center gap-5 mt-5">
                        {listCategory.map((currentCategory, index) => (
                            // card
                            <div
                                key={index}
                                className={`card text-center cursor-pointer ${
                                    currentCategory.name === category
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => {
                                    handleCategoryClick(currentCategory.name);
                                }}
                            >
                                <div className="img-parent">
                                    <img
                                        src={
                                            currentCategory.image
                                                ? currentCategory.image
                                                : fried
                                        }
                                        alt=""
                                        className="rounded-circle"
                                    />
                                </div>
                                <h3 className="mt-2 text-capitalize fs-5">
                                    {currentCategory.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <CardParent className=" flex-lg-wrap justify-content-lg-center mt-3">
                        {exploreRecipes.map((recipe, index) => (
                            <Card key={index} recipe={recipe} />
                        ))}
                    </CardParent>
                </div>
            </section>
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

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Footer />
        </>
    );
}

export default Home;
