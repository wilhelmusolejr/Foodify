import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// component
import Navigator from "../components/Navigator";
import PrimaryButton from "../components/PrimaryButton";
import CardParent from "../components/CardParent";
import Card from "../components/Card";

// asset
import pizzaBanner from "../assets/pizza.png";
import Loader from "../components/Loader";
import RecipeTag from "../components/RecipeTag";
import fried from "../assets/RandomFood/fried.jpg";
import Footer from "../components/Footer";

function Recipe() {
    const { id } = useParams();
    const api_key = `?apiKey=77bddbde61384438bbdb62d6af154c09`;
    const base_url = `https://api.spoonacular.com`;
    const id_recipe = `${base_url}/recipes/${id}/information${api_key}`;
    const similar_recipe = `${base_url}/recipes/${id}/similar${api_key}`;
    let bulkInformation = `${base_url}/recipes/informationBulk${api_key}&ids=`;

    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);
    const [similarRecipe, setSimilarRecipe] = useState([]);
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

    let debug = true;

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(id_recipe);
                const data = await response.json();

                setRecipe(data);

                const response_similar = await fetch(similar_recipe);
                const data_similar = await response_similar.json();

                let ids = [];

                data_similar.forEach((recipe) => {
                    ids.push(recipe.id);
                });

                bulkInformation += ids.join(",");

                const response_individual = await fetch(bulkInformation);
                const data_individual = await response_individual.json();

                setSimilarRecipe(data_individual);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the recipe:", error);
            }
        };

        let data = {
            recipes: [
                {
                    vegetarian: false,
                    vegan: false,
                    glutenFree: true,
                    dairyFree: true,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: true,
                    weightWatcherSmartPoints: 21,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 2,
                    healthScore: 18,
                    creditsText: "foodista.com",
                    sourceName: "foodista.com",
                    pricePerServing: 219.68,
                    extendedIngredients: [
                        {
                            id: 10020444,
                            aisle: "Pasta and Rice",
                            image: "rice-white-long-grain-or-basmatii-cooked.jpg",
                            consistency: "SOLID",
                            name: "basmati rice",
                            nameClean: "basmati rice",
                            original: "basmati rice",
                            originalName: "basmati rice",
                            amount: 4,
                            unit: "servings",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                                metric: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                            },
                        },
                        {
                            id: 19334,
                            aisle: "Baking",
                            image: "light-brown-sugar.jpg",
                            consistency: "SOLID",
                            name: "brown sugar",
                            nameClean: "golden brown sugar",
                            original: "1 Tbsp. palm or brown sugar",
                            originalName: "palm or brown sugar",
                            amount: 1,
                            unit: "Tbsp",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "Tbsp",
                                    unitLong: "Tbsp",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "Tbsp",
                                    unitLong: "Tbsp",
                                },
                            },
                        },
                        {
                            id: 19334,
                            aisle: "Baking",
                            image: "dark-brown-sugar.png",
                            consistency: "SOLID",
                            name: "brown sugar",
                            nameClean: "golden brown sugar",
                            original: "1 Tbsp. palm or brown sugar",
                            originalName: "palm or brown sugar",
                            amount: 1,
                            unit: "Tbsp",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "Tbsp",
                                    unitLong: "Tbsp",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "Tbsp",
                                    unitLong: "Tbsp",
                                },
                            },
                        },
                        {
                            id: 6179,
                            aisle: "Ethnic Foods",
                            image: "asian-fish-sauce.jpg",
                            consistency: "LIQUID",
                            name: "fish sauce",
                            nameClean: "fish sauce",
                            original: "2 Tbsp. fish sauce",
                            originalName: "fish sauce",
                            amount: 2,
                            unit: "Tbsp",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                            },
                        },
                        {
                            id: 9160,
                            aisle: "Produce",
                            image: "lime-juice.png",
                            consistency: "LIQUID",
                            name: "lime juice",
                            nameClean: "lime juice",
                            original:
                                "2 Tbsp. fresh lime juice, or wedges for serving",
                            originalName:
                                "fresh lime juice, or wedges for serving",
                            amount: 2,
                            unit: "Tbsp",
                            meta: ["fresh", "for serving"],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                            },
                        },
                        {
                            id: 10211821,
                            aisle: "Produce",
                            image: "yellow-bell-pepper.jpg",
                            consistency: "SOLID",
                            name: "bell pepper",
                            nameClean: "bell pepper",
                            original: "pepper",
                            originalName: "pepper",
                            amount: 4,
                            unit: "servings",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                                metric: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                            },
                        },
                        {
                            id: 10211821,
                            aisle: "Produce",
                            image: "bell-pepper-orange.png",
                            consistency: "SOLID",
                            name: "bell pepper",
                            nameClean: "bell pepper",
                            original: "pepper",
                            originalName: "pepper",
                            amount: 4,
                            unit: "servings",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                                metric: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                            },
                        },
                        {
                            id: 2047,
                            aisle: "Spices and Seasonings",
                            image: "salt.jpg",
                            consistency: "SOLID",
                            name: "salt",
                            nameClean: "table salt",
                            original: "Salt",
                            originalName: "Salt",
                            amount: 4,
                            unit: "servings",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                                metric: {
                                    amount: 4,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                            },
                        },
                        {
                            id: 1055062,
                            aisle: "Meat",
                            image: "chicken-breasts.png",
                            consistency: "SOLID",
                            name: "chicken breasts",
                            nameClean: "boneless skinless chicken breast",
                            original:
                                "2 large boneless, skinless, chicken breasts",
                            originalName: "boneless, skinless, chicken breasts",
                            amount: 2,
                            unit: "large",
                            meta: ["boneless", "skinless"],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "large",
                                    unitLong: "larges",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "large",
                                    unitLong: "larges",
                                },
                            },
                        },
                        {
                            id: 12117,
                            aisle: "Canned and Jarred",
                            image: "coconut-milk.png",
                            consistency: "LIQUID",
                            name: "coconut milk",
                            nameClean: "unsweetened coconut milk",
                            original: "1 (14oz) can unsweetened coconut milk",
                            originalName: "unsweetened coconut milk",
                            amount: 14,
                            unit: "oz",
                            meta: ["unsweetened", "canned"],
                            measures: {
                                us: {
                                    amount: 14,
                                    unitShort: "oz",
                                    unitLong: "ounces",
                                },
                                metric: {
                                    amount: 396.893,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 4669,
                            aisle: "Oil, Vinegar, Salad Dressing",
                            image: "vegetable-oil.jpg",
                            consistency: "LIQUID",
                            name: "vegetable oil",
                            nameClean: "vegetable oil",
                            original: "2 Tbsp. grapeseed or vegetable oil",
                            originalName: "grapeseed or vegetable oil",
                            amount: 2,
                            unit: "Tbsp",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                            },
                        },
                        {
                            id: 10093605,
                            aisle: "Ethnic Foods",
                            image: "green-curry-paste.png",
                            consistency: "SOLID",
                            name: "curry paste",
                            nameClean: "green curry paste",
                            original:
                                "2 Tbsp. curry paste (green, red, or yellow)",
                            originalName: "curry paste (green, red, or yellow)",
                            amount: 2,
                            unit: "Tbsp",
                            meta: ["green", "red", "yellow", "(, , or )"],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                            },
                        },
                    ],
                    id: 641145,
                    title: "Curry-Braised Chicken",
                    readyInMinutes: 75,
                    servings: 4,
                    sourceUrl:
                        "http://www.foodista.com/recipe/YN6PSSKQ/curry-braised-chicken",
                    image: "https://img.spoonacular.com/recipes/641145-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Forget going out to eat or ordering takeout every time you crave Indian food. Try making Curry-Braised Chicken at home. This recipe serves 4. For \u003Cb\u003E$2.2 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 26%\u003C/b\u003E of your daily requirements of vitamins and minerals. This main course has \u003Cb\u003E565 calories\u003C/b\u003E, \u003Cb\u003E19g of protein\u003C/b\u003E, and \u003Cb\u003E33g of fat\u003C/b\u003E per serving. This recipe is liked by 2 foodies and cooks. If you have lime juice, chicken breasts, coconut milk, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around \u003Cb\u003E1 hour and 15 minutes\u003C/b\u003E. It is brought to you by Foodista. It is a good option if you\'re following a \u003Cb\u003Egluten free, dairy free, and fodmap friendly\u003C/b\u003E diet. With a spoonacular \u003Cb\u003Escore of 64%\u003C/b\u003E, this dish is good. Try \u003Ca href="https://spoonacular.com/recipes/curry-braised-chicken-legs-1531923"\u003ECurry Braised Chicken Legs\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/coconut-curry-braised-chicken-thighs-1040009"\u003ECoconut-Curry Braised Chicken Thighs\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/curry-and-yogurt-braised-chicken-thighs-74523"\u003ECurry-and-Yogurt-Braised Chicken Thighs\u003C/a\u003E for similar recipes.',
                    cuisines: ["Indian", "Asian"],
                    dishTypes: ["lunch", "main course", "main dish", "dinner"],
                    diets: ["gluten free", "dairy free", "fodmap friendly"],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003EPreheat your oven to 325 degrees Fahrenheit.\u003C/li\u003E\u003Cli\u003ECut the chicken breasts in half. Heat oil over medium-high in a Dutch oven. Dust chicken with salt and pepper, then brown 1-2 minutes per side in the oil, working in batches. Set chicken aside.\u003C/li\u003E\u003Cli\u003EAdd curry paste to the Dutch oven, then use a wooden spoon to break up large pieces and work the paste into the hot oil. Once combined, add the coconut milk and use the wooden spoon to release any browned pieces of chicken stuck to the pot. Stir in the fish sauce and sugar.\u003C/li\u003E\u003Cli\u003ECover the Dutch oven and place in the oven. Bake for 45-55 minutes, or until chicken is cooked through and no longer pink.\u003C/li\u003E\u003Cli\u003EStir in the lime juice and serve with cooked rice.\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Preheat your oven to 325 degrees Fahrenheit.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                            temperature: {
                                                number: 325,
                                                unit: "Fahrenheit",
                                            },
                                        },
                                    ],
                                },
                                {
                                    number: 2,
                                    step: "Cut the chicken breasts in half.",
                                    ingredients: [
                                        {
                                            id: 5062,
                                            name: "chicken breast",
                                            localizedName: "chicken breast",
                                            image: "chicken-breasts.png",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 3,
                                    step: "Heat oil over medium-high in a Dutch oven. Dust chicken with salt and pepper, then brown 1-2 minutes per side in the oil, working in batches. Set chicken aside.",
                                    ingredients: [
                                        {
                                            id: 1102047,
                                            name: "salt and pepper",
                                            localizedName: "salt and pepper",
                                            image: "salt-and-pepper.jpg",
                                        },
                                        {
                                            id: 0,
                                            name: "chicken",
                                            localizedName: "chicken",
                                            image: "whole-chicken.jpg",
                                        },
                                        {
                                            id: 4582,
                                            name: "cooking oil",
                                            localizedName: "cooking oil",
                                            image: "vegetable-oil.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404667,
                                            name: "dutch oven",
                                            localizedName: "dutch oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/dutch-oven.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 2,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 4,
                                    step: "Add curry paste to the Dutch oven, then use a wooden spoon to break up large pieces and work the paste into the hot oil. Once combined, add the coconut milk and use the wooden spoon to release any browned pieces of chicken stuck to the pot. Stir in the fish sauce and sugar.Cover the Dutch oven and place in the oven.",
                                    ingredients: [
                                        {
                                            id: 12118,
                                            name: "coconut milk",
                                            localizedName: "coconut milk",
                                            image: "coconut-milk.png",
                                        },
                                        {
                                            id: 93605,
                                            name: "curry paste",
                                            localizedName: "curry paste",
                                            image: "chili-paste.png",
                                        },
                                        {
                                            id: 6179,
                                            name: "fish sauce",
                                            localizedName: "fish sauce",
                                            image: "asian-fish-sauce.jpg",
                                        },
                                        {
                                            id: 0,
                                            name: "chicken",
                                            localizedName: "chicken",
                                            image: "whole-chicken.jpg",
                                        },
                                        {
                                            id: 19335,
                                            name: "sugar",
                                            localizedName: "sugar",
                                            image: "sugar-in-bowl.png",
                                        },
                                        {
                                            id: 4582,
                                            name: "cooking oil",
                                            localizedName: "cooking oil",
                                            image: "vegetable-oil.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404732,
                                            name: "wooden spoon",
                                            localizedName: "wooden spoon",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/wooden-spoon.jpg",
                                        },
                                        {
                                            id: 404667,
                                            name: "dutch oven",
                                            localizedName: "dutch oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/dutch-oven.jpg",
                                        },
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 5,
                                    step: "Bake for 45-55 minutes, or until chicken is cooked through and no longer pink.Stir in the lime juice and serve with cooked rice.",
                                    ingredients: [
                                        {
                                            id: 10220445,
                                            name: "cooked rice",
                                            localizedName: "cooked rice",
                                            image: "uncooked-white-rice.png",
                                        },
                                        {
                                            id: 9160,
                                            name: "lime juice",
                                            localizedName: "lime juice",
                                            image: "lime-juice.png",
                                        },
                                        {
                                            id: 0,
                                            name: "chicken",
                                            localizedName: "chicken",
                                            image: "whole-chicken.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 55,
                                        unit: "minutes",
                                    },
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 66.2137222290039,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/curry-braised-chicken-641145",
                },
            ],
        };

        if (debug) {
            let temp = [
                data.recipes[0],
                data.recipes[0],
                data.recipes[0],
                data.recipes[0],
            ];

            setRecipe(data.recipes[0]);
            setSimilarRecipe(temp);
            setLoading(false);
        } else {
            fetchRecipe();
        }
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Navigator />

            <header className="recipe-header">
                <div className="container-fluid">
                    <div className="header-container flex-container mt-3 d-flex flex-wrap-reverse p-3">
                        {/* 1 */}
                        <div className="text-light py-3 z-1 left">
                            <h1 className="recipe_title">{recipe.title}</h1>
                            <p
                                className="mt-3 recipe_summary p-3 rounded"
                                dangerouslySetInnerHTML={{
                                    __html: recipe.summary,
                                }}
                            />
                            <PrimaryButton className="mt-5">
                                Add to bookmark
                            </PrimaryButton>
                        </div>
                        {/* 2 */}
                        <div className="pizza-banner p-3 d-flex justify-content-center align-items-center">
                            <img
                                src={recipe.image}
                                alt=""
                                className="position-absolute img-with-shadow"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {recipe.dishTypes && recipe.dishTypes.length > 0 && (
                <section className="my-5">
                    <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap gap-2">
                        {recipe.dishTypes.map((dish, index) => (
                            <span key={index} className="badge bg-primary p-2">
                                {dish}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            <section className="recipe-info my-5">
                <div className="container-fluid d-flex flex-lg-nowrap flex-wrap flex-container">
                    {/* 1 */}
                    <div className="left px-2 py-5">
                        <h2 className="text-center mb-5">Ingredients</h2>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            {recipe.extendedIngredients.map(
                                (ingredient, index) => (
                                    <div
                                        key={index}
                                        className="box rounded d-flex align-items-center justify-content-center"
                                    >
                                        <img
                                            src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                                            alt=""
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="right px-2 py-5">
                        <h2 className="text-center mb-5">Instructions</h2>

                        <ol
                            className="p-0"
                            dangerouslySetInnerHTML={{
                                __html: recipe.instructions,
                            }}
                        />
                    </div>
                </div>
            </section>

            <section className="my-5">
                <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap gap-2">
                    {recipe.vegan && <RecipeTag text="vegan" />}
                    {recipe.sustainable && <RecipeTag text="Sustainable" />}
                    {recipe.glutenFree && <RecipeTag text="Gluten Free" />}
                    {recipe.dairyFree && <RecipeTag text="Dairy Free" />}
                    {recipe.cheap && <RecipeTag text="Cheap" />}
                </div>
            </section>

            <section className="recipe-detailed-instruction my-5">
                <div className="container-fluid">
                    <h2 className="text-capilitaze mb-3">
                        Step by step Instructions
                    </h2>
                    <p className="paragraph mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit possimus aperiam ratione assumenda tenetur facere
                        unde repellendus sint minima officiis? Voluptates
                        commodi ipsa cupiditate qui eos numquam dolores esse ab!
                    </p>

                    <div
                        className="text-light d-flex flex-column gap-2 accordion step-by-step"
                        id="accordionExample"
                    >
                        {recipe.analyzedInstructions[0].steps.map((step) => (
                            <div
                                key={step.number}
                                className="accordion-item border p-2 cursor-pointer"
                            >
                                <p className="accordion-header text-light d-none">
                                    <button
                                        className="accordion-button collapsed text-uppercase text-light"
                                        type="button"
                                    >
                                        Step {step.number}
                                    </button>
                                </p>

                                <div
                                    className="d-flex justify-content-between align-items-center p-3"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${step.number}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${step.number}`}
                                >
                                    <p>Step {step.number}</p>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </div>

                                <div
                                    id={`collapse${step.number}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body border rounded">
                                        <div className="d-flex flex-column gap-2">
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                {step.equipment.map(
                                                    (equipment, index) => (
                                                        <img
                                                            className="rounded"
                                                            key={index}
                                                            src={
                                                                equipment.image
                                                            }
                                                            alt={equipment.name}
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <p className="text-light paragraph">
                                                {step.step}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="my-5 d-none">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="recipe-clock">
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div className="">
                            <h3>Food will be ready in</h3>
                            <div className="d-flex align-items-end">
                                <p className="recipe-time">
                                    {recipe.readyInMinutes}
                                </p>
                                <p>minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending-recipe my-5 py-5 gradient-to-top">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="text-capitalize">Similar recipes</h2>
                        <a href="#">View more</a>
                    </div>

                    <CardParent className=" flex-lg-wrap justify-content-lg-center mt-3">
                        {similarRecipe.map((recipe, index) => (
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

            <Footer />
        </>
    );
}

export default Recipe;
