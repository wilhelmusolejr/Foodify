import React, { useEffect, useState } from "react";

// Font awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faBars,
//     faStar,
//     faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";
// import { faSmile, faBookmark } from "@fortawesome/free-regular-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
import CategorySection from "../components/CategorySection";

function Home() {
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

    const [category, setCategory] = useState("all");
    const [exploreRecipes, setExploreRecipes] = useState([]);

    let api_key = `&apiKey=77bddbde61384438bbdb62d6af154c09`;
    let base_url = `https://api.spoonacular.com`;
    let random_recipe = `${base_url}/recipes/random?number=100${api_key}`;

    let number_recipes = 32;

    let debug = false;

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(random_recipe);
                const data = await response.json();

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

        let data = {
            recipes: [
                {
                    vegetarian: false,
                    vegan: false,
                    glutenFree: false,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 20,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 12,
                    healthScore: 1,
                    creditsText:
                        "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                    license: "CC BY 3.0",
                    sourceName: "Foodista",
                    pricePerServing: 134.29,
                    extendedIngredients: [
                        {
                            id: 18632,
                            aisle: "Baking",
                            image: "brownie-isolated.png",
                            consistency: "SOLID",
                            name: "brownie mix",
                            nameClean: "brownie mix",
                            original: "1 package prepared brownie mix",
                            originalName: "prepared brownie mix",
                            amount: 1,
                            unit: "package",
                            meta: ["prepared"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "pkg",
                                    unitLong: "package",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "pkg",
                                    unitLong: "package",
                                },
                            },
                        },
                        {
                            id: 1123,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "egg.png",
                            consistency: "SOLID",
                            name: "egg",
                            nameClean: "egg",
                            original: "1 egg",
                            originalName: "egg",
                            amount: 1,
                            unit: "",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 10018617,
                            aisle: "Baking",
                            image: "graham-crackers.jpg",
                            consistency: "SOLID",
                            name: "graham cracker crumbs",
                            nameClean: "graham cracker crumbs",
                            original:
                                "1 1/2 cups crushed graham cracker crumbs",
                            originalName: "crushed graham cracker crumbs",
                            amount: 1.5,
                            unit: "cups",
                            meta: ["crushed"],
                            measures: {
                                us: {
                                    amount: 1.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 126,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 18617,
                            aisle: "Sweet Snacks",
                            image: "graham-crackers.jpg",
                            consistency: "SOLID",
                            name: "graham crackers",
                            nameClean: "graham crackers",
                            original: "2 whole graham crackers",
                            originalName: "whole graham crackers",
                            amount: 2,
                            unit: "",
                            meta: ["whole"],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 10119116,
                            aisle: "Baking",
                            image: "marshmallows-mini.png",
                            consistency: "SOLID",
                            name: "marshmallows",
                            nameClean: "mini marshmallows",
                            original: "1.5 mini marshmallows",
                            originalName: "mini marshmallows",
                            amount: 1.5,
                            unit: "",
                            meta: ["mini"],
                            measures: {
                                us: {
                                    amount: 1.5,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 1.5,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 9302,
                            aisle: "Produce",
                            image: "raspberries.jpg",
                            consistency: "SOLID",
                            name: "raspberries",
                            nameClean: "raspberries",
                            original:
                                "1 pint fresh raspberries, cleaned, dried and cut in half",
                            originalName:
                                "fresh raspberries, cleaned, dried and cut in half",
                            amount: 1,
                            unit: "pint",
                            meta: ["dried", "fresh", "cleaned", "cut in half"],
                            measures: {
                                us: {
                                    amount: 1.517,
                                    unitShort: "pts",
                                    unitLong: "pints",
                                },
                                metric: {
                                    amount: 1.517,
                                    unitShort: "pts",
                                    unitLong: "pints",
                                },
                            },
                        },
                        {
                            id: 19335,
                            aisle: "Baking",
                            image: "sugar-in-bowl.png",
                            consistency: "SOLID",
                            name: "sugar",
                            nameClean: "sugar",
                            original: "2 tablespoons sugar",
                            originalName: "sugar",
                            amount: 2,
                            unit: "tablespoons",
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
                            id: 1145,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "butter-sliced.jpg",
                            consistency: "SOLID",
                            name: "butter",
                            nameClean: "unsalted butter",
                            original: "6 tablespoons unsalted butter, melted",
                            originalName: "unsalted butter, melted",
                            amount: 6,
                            unit: "tablespoons",
                            meta: ["unsalted", "melted"],
                            measures: {
                                us: {
                                    amount: 6,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                                metric: {
                                    amount: 6,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
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
                            original: "1/3 cup vegetable oil",
                            originalName: "vegetable oil",
                            amount: 0.33333334,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.33333334,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 72.667,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 14412,
                            aisle: "Beverages",
                            image: "water.png",
                            consistency: "LIQUID",
                            name: "water",
                            nameClean: "water",
                            original: "2 tablespoons water",
                            originalName: "water",
                            amount: 2,
                            unit: "tablespoons",
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
                    ],
                    id: 658947,
                    title: "S'mores-n-berry Bars for National S'mores Day - August 10",
                    readyInMinutes: 45,
                    servings: 9,
                    sourceUrl:
                        "http://www.foodista.com/recipe/B4XV8XR2/s-mores-n-berry-bars-for-national-s-mores-day-august-10",
                    image: "https://img.spoonacular.com/recipes/658947-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'You can never have too many side dish recipes, so give S\'mores-n-berry Bars for National S\'mores Day - August 10 a try. One portion of this dish contains about \u003Cb\u003E5g of protein\u003C/b\u003E, \u003Cb\u003E25g of fat\u003C/b\u003E, and a total of \u003Cb\u003E506 calories\u003C/b\u003E. This recipe serves 9. For \u003Cb\u003E$1.34 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 7%\u003C/b\u003E of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. A few people made this recipe, and 12 would say it hit the spot. It is brought to you by Foodista. A mixture of raspberries, vegetable oil, graham cracker crumbs, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular \u003Cb\u003Escore of 20%\u003C/b\u003E, this dish is rather bad. Similar recipes are \u003Ca href="https://spoonacular.com/recipes/day-11-smores-cookie-bars-565800"\u003EDay 11: S’mores Cookie Bars\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/valentines-day-smores-485788"\u003EValentine’s Day S’mores\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/roasted-berry-smores-503606"\u003Eroasted Berry S’mores\u003C/a\u003E.',
                    cuisines: [],
                    dishTypes: ["side dish"],
                    diets: [],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003EPreheat your oven to 325 degrees F.\u003C/li\u003E\u003Cli\u003ELine an 8-inch-square baking pan with foil so that it hangs over the edges and spray it with nonstick cooking spray.\u003C/li\u003E\u003Cli\u003EUse a medium-sized bowl to mix together the melted butter, graham cracker crumbs and sugar.\u003C/li\u003E\u003Cli\u003EPress the crumb mixture evenly on the bottom of the pan.\u003C/li\u003E\u003Cli\u003EBake until golden, or for about 20 minutes. Remove and set aside.\u003C/li\u003E\u003Cli\u003ERaise the oven temperature to 350 degrees F.\u003C/li\u003E\u003Cli\u003EMeanwhile, use a medium-sized bowl and mix the brownie mixture together, then gently fold in the raspberries.\u003C/li\u003E\u003Cli\u003EPour the batter over the graham cracker crust.\u003C/li\u003E\u003Cli\u003EBake the brownie mixture for about 25 minutes (based on your brownie mix), or until a toothpick inserted in the middle of the brownie comes out clean.\u003C/li\u003E\u003Cli\u003ERemove the brownie and place the oven on broil.\u003C/li\u003E\u003Cli\u003EMeanwhile, break the two graham crackers into small pieces and arrange them in a single layer on top of the brownie.\u003C/li\u003E\u003Cli\u003ENext arrange the mini marshmallows evenly over the top of the graham crackers.\u003C/li\u003E\u003Cli\u003EPlace the pan back in the oven, just for a few minutes, until the marshmallows begin to brown. Keep a close watch on them so they dont burn under the broiler.\u003C/li\u003E\u003Cli\u003ERemove from the oven and cool completely.\u003C/li\u003E\u003Cli\u003ERemove from the pan using the overhanging foil and cut into bars to serve.\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Preheat your oven to 325 degrees F.Line an 8-inch-square baking pan with foil so that it hangs over the edges and spray it with nonstick cooking spray.Use a medium-sized bowl to mix together the melted butter, graham cracker crumbs and sugar.Press the crumb mixture evenly on the bottom of the pan.",
                                    ingredients: [
                                        {
                                            id: 10018617,
                                            name: "graham cracker crumbs",
                                            localizedName:
                                                "graham cracker crumbs",
                                            image: "graham-crackers.jpg",
                                        },
                                        {
                                            id: 4679,
                                            name: "cooking spray",
                                            localizedName: "cooking spray",
                                            image: "cooking-spray.png",
                                        },
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 19335,
                                            name: "sugar",
                                            localizedName: "sugar",
                                            image: "sugar-in-bowl.png",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404646,
                                            name: "baking pan",
                                            localizedName: "baking pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg",
                                        },
                                        {
                                            id: 404783,
                                            name: "bowl",
                                            localizedName: "bowl",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                                        },
                                        {
                                            id: 404765,
                                            name: "aluminum foil",
                                            localizedName: "aluminum foil",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png",
                                        },
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
                                    step: "Bake until golden, or for about 20 minutes.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 20,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 3,
                                    step: "Remove and set aside.Raise the oven temperature to 350 degrees F.Meanwhile, use a medium-sized bowl and mix the brownie mixture together, then gently fold in the raspberries.",
                                    ingredients: [
                                        {
                                            id: 9302,
                                            name: "raspberries",
                                            localizedName: "raspberries",
                                            image: "https://spoonacular.com/cdn/ingredients_100x100/raspberries.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404783,
                                            name: "bowl",
                                            localizedName: "bowl",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                                        },
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                            temperature: {
                                                number: 350,
                                                unit: "Fahrenheit",
                                            },
                                        },
                                    ],
                                },
                                {
                                    number: 4,
                                    step: "Pour the batter over the graham cracker crust.",
                                    ingredients: [
                                        {
                                            id: 18942,
                                            name: "graham cracker pie crust",
                                            localizedName:
                                                "graham cracker pie crust",
                                            image: "pie-crust-graham-cracker.jpg",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 5,
                                    step: "Bake the brownie mixture for about 25 minutes (based on your brownie mix), or until a toothpick inserted in the middle of the brownie comes out clean.",
                                    ingredients: [
                                        {
                                            id: 18632,
                                            name: "brownie mix",
                                            localizedName: "brownie mix",
                                            image: "brownie-isolated.png",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404644,
                                            name: "toothpicks",
                                            localizedName: "toothpicks",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/toothpicks.jpg",
                                        },
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 25,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 6,
                                    step: "Remove the brownie and place the oven on broil.Meanwhile, break the two graham crackers into small pieces and arrange them in a single layer on top of the brownie.Next arrange the mini marshmallows evenly over the top of the graham crackers.",
                                    ingredients: [
                                        {
                                            id: 10119116,
                                            name: "mini marshmallows",
                                            localizedName: "mini marshmallows",
                                            image: "marshmallows-mini.png",
                                        },
                                        {
                                            id: 18617,
                                            name: "graham crackers",
                                            localizedName: "graham crackers",
                                            image: "graham-crackers.jpg",
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
                                },
                                {
                                    number: 7,
                                    step: "Place the pan back in the oven, just for a few minutes, until the marshmallows begin to brown. Keep a close watch on them so they dont burn under the broiler.",
                                    ingredients: [
                                        {
                                            id: 19116,
                                            name: "marshmallows",
                                            localizedName: "marshmallows",
                                            image: "normal-marshmallows.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 405914,
                                            name: "broiler",
                                            localizedName: "broiler",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                        {
                                            id: 404645,
                                            name: "frying pan",
                                            localizedName: "frying pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
                                        },
                                    ],
                                },
                                {
                                    number: 8,
                                    step: "Remove from the oven and cool completely.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 9,
                                    step: "Remove from the pan using the overhanging foil and cut into bars to serve.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404765,
                                            name: "aluminum foil",
                                            localizedName: "aluminum foil",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png",
                                        },
                                        {
                                            id: 404645,
                                            name: "frying pan",
                                            localizedName: "frying pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 30.2002544403076,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/smores-n-berry-bars-for-national-smores-day-august-10-658947",
                },
                {
                    vegetarian: false,
                    vegan: false,
                    glutenFree: true,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 9,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 27,
                    healthScore: 1,
                    creditsText:
                        "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                    license: "CC BY 3.0",
                    sourceName: "Foodista",
                    pricePerServing: 168.58,
                    extendedIngredients: [
                        {
                            id: 1001,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "butter-sliced.jpg",
                            consistency: "SOLID",
                            name: "butter",
                            nameClean: "butter",
                            original: "1 tablespoon butter",
                            originalName: "butter",
                            amount: 1,
                            unit: "tablespoon",
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
                            id: 10011268,
                            aisle: "Produce",
                            image: "dried-porcini-mushrooms.png",
                            consistency: "SOLID",
                            name: "porcini mushrooms",
                            nameClean: "dried porcini mushrooms",
                            original:
                                "1 cup porcini mushrooms (dried or fresh)",
                            originalName: "porcini mushrooms (dried or fresh)",
                            amount: 1,
                            unit: "cup",
                            meta: ["fresh", "()"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "cup",
                                    unitLong: "cup",
                                },
                                metric: {
                                    amount: 28,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 1053,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "fluid-cream.jpg",
                            consistency: "LIQUID",
                            name: "heavy cream",
                            nameClean: "cream",
                            original:
                                "1/2 cup heavy cream (or until desired consistency)",
                            originalName:
                                "heavy cream (or until desired consistency)",
                            amount: 0.5,
                            unit: "cup",
                            meta: ["(or until desired consistency)"],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 119,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 1032,
                            aisle: "Cheese",
                            image: "parmesan.jpg",
                            consistency: "SOLID",
                            name: "parmesan cheese",
                            nameClean: "grated parmesan cheese",
                            original:
                                "1 cup grated Parmesan cheese (or more to taste)",
                            originalName:
                                "grated Parmesan cheese (or more to taste)",
                            amount: 1,
                            unit: "cup",
                            meta: ["grated", "to taste", "( )"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "cup",
                                    unitLong: "cup",
                                },
                                metric: {
                                    amount: 100,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 10035137,
                            aisle: "Ethnic Foods",
                            image: "cornmeal.png",
                            consistency: "SOLID",
                            name: "polenta",
                            nameClean: "polenta",
                            original: "1 cup polenta",
                            originalName: "polenta",
                            amount: 1,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "cup",
                                    unitLong: "cup",
                                },
                                metric: {
                                    amount: 159,
                                    unitShort: "g",
                                    unitLong: "grams",
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
                            original: "Salt to taste",
                            originalName: "Salt to taste",
                            amount: 6,
                            unit: "servings",
                            meta: ["to taste"],
                            measures: {
                                us: {
                                    amount: 6,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                                metric: {
                                    amount: 6,
                                    unitShort: "servings",
                                    unitLong: "servings",
                                },
                            },
                        },
                        {
                            id: 14412,
                            aisle: "Beverages",
                            image: "water.png",
                            consistency: "LIQUID",
                            name: "water",
                            nameClean: "water",
                            original: "4 cups water",
                            originalName: "water",
                            amount: 4,
                            unit: "cups",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 4,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 946.352,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                    ],
                    id: 640677,
                    title: "Creamy Porcini Mushroom Polenta",
                    readyInMinutes: 45,
                    servings: 6,
                    sourceUrl:
                        "https://www.foodista.com/recipe/F38KZJ88/creamy-porcini-mushroom-polenta",
                    image: "https://img.spoonacular.com/recipes/640677-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Creamy Porcini Mushroom Polentan is a \u003Cb\u003Egluten free\u003C/b\u003E side dish. This recipe makes 6 servings with \u003Cb\u003E266 calories\u003C/b\u003E, \u003Cb\u003E8g of protein\u003C/b\u003E, and \u003Cb\u003E14g of fat\u003C/b\u003E each. For \u003Cb\u003E$1.69 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 7%\u003C/b\u003E of your daily requirements of vitamins and minerals. 27 people found this recipe to be scrumptious and satisfying. Head to the store and pick up polenta, water, heavy cream, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes around \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Enot so excellent spoonacular score of 29%\u003C/b\u003E. Users who liked this recipe also liked \u003Ca href="https://spoonacular.com/recipes/wild-mushroom-polenta-with-porcini-sauce-620778"\u003EWild Mushroom Polenta with Porcini Sauce\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/creamy-polenta-mushroom-ragout-502641"\u003ECreamy polenta & mushroom ragout\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/polenta-with-creamy-mushroom-sauce-695425"\u003EPolenta with Creamy Mushroom Sauce\u003C/a\u003E.',
                    cuisines: [],
                    dishTypes: ["side dish"],
                    diets: ["gluten free"],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003EIn a large heavy bottomed saucepan, season water with salt and bring to a boil. Quickly whisk in the polenta until fully incorporated.\u003C/li\u003E\u003Cli\u003ELower the heat to a simmer, add the butter and porcini and allow the polenta to cook, stirring occasionally for about 30 minutes.\u003C/li\u003E\u003Cli\u003EFinish by stirring in the cream and Parmesan cheese. If necessary, add salt to taste.\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "In a large heavy bottomed saucepan, season water with salt and bring to a boil. Quickly whisk in the polenta until fully incorporated.Lower the heat to a simmer, add the butter and porcini and allow the polenta to cook, stirring occasionally for about 30 minutes.Finish by stirring in the cream and Parmesan cheese. If necessary, add salt to taste.",
                                    ingredients: [
                                        {
                                            id: 1033,
                                            name: "parmesan",
                                            localizedName: "parmesan",
                                            image: "parmesan.jpg",
                                        },
                                        {
                                            id: 10035137,
                                            name: "polenta",
                                            localizedName: "polenta",
                                            image: "cornmeal.png",
                                        },
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 1053,
                                            name: "cream",
                                            localizedName: "cream",
                                            image: "fluid-cream.jpg",
                                        },
                                        {
                                            id: 14412,
                                            name: "water",
                                            localizedName: "water",
                                            image: "water.png",
                                        },
                                        {
                                            id: 2047,
                                            name: "salt",
                                            localizedName: "salt",
                                            image: "salt.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404669,
                                            name: "sauce pan",
                                            localizedName: "sauce pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg",
                                        },
                                        {
                                            id: 404661,
                                            name: "whisk",
                                            localizedName: "whisk",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/whisk.png",
                                        },
                                    ],
                                    length: {
                                        number: 30,
                                        unit: "minutes",
                                    },
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 31.0196723937988,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/creamy-porcini-mushroom-polenta-640677",
                },
                {
                    vegetarian: true,
                    vegan: false,
                    glutenFree: false,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 23,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 3,
                    healthScore: 1,
                    creditsText:
                        "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                    license: "CC BY 3.0",
                    sourceName: "Foodista",
                    pricePerServing: 100.88,
                    extendedIngredients: [
                        {
                            id: 18369,
                            aisle: "Baking",
                            image: "white-powder.jpg",
                            consistency: "SOLID",
                            name: "baking powder",
                            nameClean: "baking powder",
                            original: "1 tsp baking powder",
                            originalName: "baking powder",
                            amount: 1,
                            unit: "tsp",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
                                },
                            },
                        },
                        {
                            id: 1001,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "butter-sliced.jpg",
                            consistency: "SOLID",
                            name: "butter",
                            nameClean: "butter",
                            original: "1/4 cup butter at room temperature",
                            originalName: "butter at room temperature",
                            amount: 0.25,
                            unit: "cup",
                            meta: ["at room temperature"],
                            measures: {
                                us: {
                                    amount: 0.25,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 56.75,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 2006,
                            aisle: "Spices and Seasonings",
                            image: "cardamom.jpg",
                            consistency: "SOLID",
                            name: "cardamom",
                            nameClean: "cardamom",
                            original: "½ tsp cardamom, ground into powder",
                            originalName: "cardamom, ground into powder",
                            amount: 0.5,
                            unit: "tsp",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 0.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 19165,
                            aisle: "Baking",
                            image: "cocoa-powder.png",
                            consistency: "SOLID",
                            name: "cocoa powder",
                            nameClean: "cacao powder",
                            original: "1/3 cup cocoa powder, sifted",
                            originalName: "cocoa powder, sifted",
                            amount: 0.33333334,
                            unit: "cup",
                            meta: ["sifted"],
                            measures: {
                                us: {
                                    amount: 0.33333334,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 28.667,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 20027,
                            aisle: "Baking",
                            image: "white-powder.jpg",
                            consistency: "SOLID",
                            name: "cornflour",
                            nameClean: "corn starch",
                            original: "1 tbsp cornflour",
                            originalName: "cornflour",
                            amount: 1,
                            unit: "tbsp",
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
                            id: 1017,
                            aisle: "Cheese",
                            image: "cream-cheese.jpg",
                            consistency: "SOLID",
                            name: "cream cheese",
                            nameClean: "cream cheese",
                            original: "500g cream cheese, at room temperature",
                            originalName: "cream cheese, at room temperature",
                            amount: 500,
                            unit: "g",
                            meta: ["at room temperature"],
                            measures: {
                                us: {
                                    amount: 1.102,
                                    unitShort: "lb",
                                    unitLong: "pounds",
                                },
                                metric: {
                                    amount: 500,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1011053,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "white-cream.png",
                            consistency: "LIQUID",
                            name: "double cream",
                            nameClean: "double cream",
                            original: "1 1/3 cups double cream",
                            originalName: "double cream",
                            amount: 1.3333334,
                            unit: "cups",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1.3333334,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 317.333,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 9152,
                            aisle: "Produce",
                            image: "lemon-juice.jpg",
                            consistency: "LIQUID",
                            name: "lemon juice",
                            nameClean: "lemon juice",
                            original: "1/3 cup lemon juice",
                            originalName: "lemon juice",
                            amount: 0.33333334,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.33333334,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 81.333,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 20081,
                            aisle: "Baking",
                            image: "flour.png",
                            consistency: "SOLID",
                            name: "flour",
                            nameClean: "wheat flour",
                            original: "1 cup plain flour",
                            originalName: "plain flour",
                            amount: 1,
                            unit: "cup",
                            meta: ["plain"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "cup",
                                    unitLong: "cup",
                                },
                                metric: {
                                    amount: 125,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1036,
                            aisle: "Cheese",
                            image: "ricotta.png",
                            consistency: "SOLID",
                            name: "ricotta cheese",
                            nameClean: "ricotta cheese",
                            original: "500g ricotta cheese",
                            originalName: "ricotta cheese",
                            amount: 500,
                            unit: "g",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1.102,
                                    unitShort: "lb",
                                    unitLong: "pounds",
                                },
                                metric: {
                                    amount: 500,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 19335,
                            aisle: "Baking",
                            image: "sugar-in-bowl.png",
                            consistency: "SOLID",
                            name: "sugar",
                            nameClean: "sugar",
                            original: "1/4 cup sugar",
                            originalName: "sugar",
                            amount: 0.25,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.25,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 50,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 19335,
                            aisle: "Baking",
                            image: "sugar-in-bowl.png",
                            consistency: "SOLID",
                            name: "sugar",
                            nameClean: "sugar",
                            original: "1 ½ cups sugar",
                            originalName: "sugar",
                            amount: 1.5,
                            unit: "cups",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 300,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 2050,
                            aisle: "Baking",
                            image: "vanilla-extract.jpg",
                            consistency: "LIQUID",
                            name: "vanilla extract",
                            nameClean: "vanilla extract",
                            original: "1 ½ tsps vanilla extract",
                            originalName: "vanilla extract",
                            amount: 1.5,
                            unit: "tsps",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 1.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                    ],
                    id: 642256,
                    title: "Eggless Cardamom and Chocolate Cheesecake",
                    readyInMinutes: 90,
                    servings: 12,
                    sourceUrl:
                        "http://www.foodista.com/recipe/PH6RYZVL/eggless-cardamom-and-chocolate-cheesecake",
                    image: "https://img.spoonacular.com/recipes/642256-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Eggless Cardamom and Chocolate Cheesecake requires around \u003Cb\u003E1 hour and 30 minutes\u003C/b\u003E from start to finish. This dessert has \u003Cb\u003E504 calories\u003C/b\u003E, \u003Cb\u003E10g of protein\u003C/b\u003E, and \u003Cb\u003E34g of fat\u003C/b\u003E per serving. This recipe serves 12 and costs $1.01 per serving. This recipe is liked by 3 foodies and cooks. A mixture of cream cheese, sugar, cardamom, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is a good option if you\'re following a \u003Cb\u003Elacto ovo vegetarian\u003C/b\u003E diet. It is brought to you by Foodista. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 22%\u003C/b\u003E. This score is rather bad. Similar recipes are \u003Ca href="https://spoonacular.com/recipes/eggless-blueberry-and-white-chocolate-baked-cheesecake-642259"\u003EEggless Blueberry and White Chocolate Baked Cheesecake\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/eggless-blueberry-and-white-chocolate-baked-cheesecake-1433451"\u003EEggless Blueberry and White Chocolate Baked Cheesecake\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/eggless-banana-and-cardamom-ice-cream-642251"\u003EEggless Bananan and Cardamom Ice Cream\u003C/a\u003E.',
                    cuisines: [],
                    dishTypes: ["dessert"],
                    diets: ["lacto ovo vegetarian"],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003EMethod for the base:\u003C/li\u003E\u003Cli\u003ESift together the flour and baking powder. Cream together the sugar and butter and add the vanilla extract.\u003C/li\u003E\u003Cli\u003ECombine the flour mixture with the butter mixture quickly with cold hands or a fork.\u003C/li\u003E\u003Cli\u003EPress the mixture into a greased 10 inch springform tin.\u003C/li\u003E\u003Cli\u003EMethod for the filling:\u003C/li\u003E\u003Cli\u003EBeat together all of the ingredients excluding the cocoa powder and ground cardamom until it has thickened. Kurma suggests not to overmix this.\u003C/li\u003E\u003Cli\u003EPlace half of the mixture into a separate bowl and add the cocoa powder and cardamom powder. Combine thoroughly.\u003C/li\u003E\u003Cli\u003EPlace the white layer of filling over the uncooked base and finally the chocolate filling over the white layer.\u003C/li\u003E\u003Cli\u003EBake at 180 degrees Celsius for 1  hours until set (I left mine for 1 hour because my fan oven cooks things a little quicker).\u003C/li\u003E\u003Cli\u003EAllow to cool and refrigerate for day. You will just have to resist the temptation of diving right in!\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Combine the flour mixture with the butter mixture quickly with cold hands or a fork.Press the mixture into a greased 10 inch springform tin.Method for the filling:Beat together all of the ingredients excluding the cocoa powder and ground cardamom until it has thickened. Kurma suggests not to overmix this.",
                                    ingredients: [
                                        {
                                            id: 1032006,
                                            name: "cardamom powder",
                                            localizedName: "cardamom powder",
                                            image: "cardamom-ground.jpg",
                                        },
                                        {
                                            id: 19165,
                                            name: "cocoa powder",
                                            localizedName: "cocoa powder",
                                            image: "cocoa-powder.png",
                                        },
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 20081,
                                            name: "all purpose flour",
                                            localizedName: "all purpose flour",
                                            image: "flour.png",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 2,
                                    step: "Place half of the mixture into a separate bowl and add the cocoa powder and cardamom powder.",
                                    ingredients: [
                                        {
                                            id: 1032006,
                                            name: "cardamom powder",
                                            localizedName: "cardamom powder",
                                            image: "cardamom-ground.jpg",
                                        },
                                        {
                                            id: 19165,
                                            name: "cocoa powder",
                                            localizedName: "cocoa powder",
                                            image: "cocoa-powder.png",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404783,
                                            name: "bowl",
                                            localizedName: "bowl",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 3,
                                    step: "Combine thoroughly.",
                                    ingredients: [],
                                    equipment: [],
                                },
                                {
                                    number: 4,
                                    step: "Place the white layer of filling over the uncooked base and finally the chocolate filling over the white layer.",
                                    ingredients: [
                                        {
                                            id: 19081,
                                            name: "chocolate",
                                            localizedName: "chocolate",
                                            image: "https://spoonacular.com/cdn/ingredients_100x100/milk-chocolate.jpg",
                                        },
                                        {
                                            id: 0,
                                            name: "base",
                                            localizedName: "base",
                                            image: "",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 5,
                                    step: "Bake at 180 degrees Celsius for 1  hours until set (I left mine for 1 hour because my fan oven cooks things a little quicker).Allow to cool and refrigerate for day. You will just have to resist the temptation of diving right in!",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                            temperature: {
                                                number: 180,
                                                unit: "Celsius",
                                            },
                                        },
                                    ],
                                    length: {
                                        number: 60,
                                        unit: "minutes",
                                    },
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 28.0197200775147,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/eggless-cardamom-and-chocolate-cheesecake-642256",
                },
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
                {
                    vegetarian: false,
                    vegan: false,
                    glutenFree: false,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 4,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 5,
                    healthScore: 21,
                    creditsText:
                        "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                    license: "CC BY 3.0",
                    sourceName: "Foodista",
                    pricePerServing: 144.39,
                    extendedIngredients: [
                        {
                            id: 1032028,
                            aisle: "Spices and Seasonings",
                            image: "chili-powder.jpg",
                            consistency: "SOLID",
                            name: "cajun seasoning",
                            nameClean: "cajun seasoning",
                            original: "1/2 teaspoon Cajun seasoning",
                            originalName: "Cajun seasoning",
                            amount: 0.5,
                            unit: "teaspoon",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 0.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 10115121,
                            aisle: "Canned and Jarred",
                            image: "canned-tuna.png",
                            consistency: "SOLID",
                            name: "tuna",
                            nameClean: "canned tuna",
                            original: "2 5 ounce cans tuna",
                            originalName: "tuna",
                            amount: 10,
                            unit: "ounce",
                            meta: ["canned"],
                            measures: {
                                us: {
                                    amount: 10,
                                    unitShort: "oz",
                                    unitLong: "ounces",
                                },
                                metric: {
                                    amount: 283.495,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 11962,
                            aisle: "Ethnic Foods",
                            image: "dried-arbol-chiles.jpg",
                            consistency: "SOLID",
                            name: "chili peppers",
                            nameClean: "dried arbol chile",
                            original: "2 chili peppers",
                            originalName: "chili peppers",
                            amount: 2,
                            unit: "",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 1032046,
                            aisle: "Condiments",
                            image: "dijon-mustard.jpg",
                            consistency: "LIQUID",
                            name: "dijon mustard",
                            nameClean: "dijon mustard",
                            original: "2 teaspoons Dijon mustard",
                            originalName: "Dijon mustard",
                            amount: 2,
                            unit: "teaspoons",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 1123,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "egg.png",
                            consistency: "SOLID",
                            name: "egg",
                            nameClean: "egg",
                            original: "1 egg",
                            originalName: "egg",
                            amount: 1,
                            unit: "",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 10211215,
                            aisle: "Produce",
                            image: "garlic.jpg",
                            consistency: "SOLID",
                            name: "garlic cloves",
                            nameClean: "whole garlic cloves",
                            original: "2 garlic cloves, minced",
                            originalName: "garlic cloves, minced",
                            amount: 2,
                            unit: "",
                            meta: ["minced"],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 1256,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "plain-yogurt.jpg",
                            consistency: "LIQUID",
                            name: "greek yogurt",
                            nameClean: "greek yogurt",
                            original: "2 teaspoons greek yogurt",
                            originalName: "greek yogurt",
                            amount: 2,
                            unit: "teaspoons",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 11291,
                            aisle: "Produce",
                            image: "spring-onions.jpg",
                            consistency: "SOLID",
                            name: "green onions",
                            nameClean: "spring onions",
                            original: "3 green onions",
                            originalName: "green onions",
                            amount: 3,
                            unit: "",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 3,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 3,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 6168,
                            aisle: "Condiments",
                            image: "hot-sauce-or-tabasco.png",
                            consistency: "LIQUID",
                            name: "hot sauce",
                            nameClean: "hot sauce",
                            original: "A few dashes of hot sauce",
                            originalName: "A few of hot sauce",
                            amount: 3,
                            unit: "dashes",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 3,
                                    unitShort: "dashes",
                                    unitLong: "dashes",
                                },
                                metric: {
                                    amount: 3,
                                    unitShort: "dashes",
                                    unitLong: "dashes",
                                },
                            },
                        },
                        {
                            id: 9152,
                            aisle: "Produce",
                            image: "lemon-juice.jpg",
                            consistency: "LIQUID",
                            name: "juice of lemon",
                            nameClean: "lemon juice",
                            original: "1 Juice of lemon",
                            originalName: "Juice of lemon",
                            amount: 1,
                            unit: "",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 98957,
                            aisle: "Frozen",
                            image: "mire-poix.jpg",
                            consistency: "SOLID",
                            name: "mirepoix",
                            nameClean: "mirepoix",
                            original: "4 ounces mirepoix",
                            originalName: "mirepoix",
                            amount: 4,
                            unit: "ounces",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 4,
                                    unitShort: "oz",
                                    unitLong: "ounces",
                                },
                                metric: {
                                    amount: 113.398,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 10018079,
                            aisle: "Baking",
                            image: "panko.jpg",
                            consistency: "SOLID",
                            name: "panko breadcrumbs",
                            nameClean: "panko",
                            original: "1 1/4 cup Panko breadcrumbs",
                            originalName: "Panko breadcrumbs",
                            amount: 1.25,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1.25,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 75,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1179,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "sour-cream.jpg",
                            consistency: "SOLID",
                            name: "cream",
                            nameClean: "light sour cream",
                            original: "1 teaspoon light sour cream",
                            originalName: "light sour cream",
                            amount: 1,
                            unit: "teaspoon",
                            meta: ["light", "sour"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
                                },
                            },
                        },
                    ],
                    id: 661218,
                    title: "Spicy Tuna Cakes",
                    readyInMinutes: 45,
                    servings: 3,
                    sourceUrl:
                        "https://www.foodista.com/recipe/HWFXR7RN/spicy-tuna-cakes",
                    image: "https://img.spoonacular.com/recipes/661218-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'If you want to add more \u003Cb\u003Epescatarian\u003C/b\u003E recipes to your repertoire, Spicy Tuna Cakes might be a recipe you should try. One portion of this dish contains around \u003Cb\u003E24g of protein\u003C/b\u003E, \u003Cb\u003E4g of fat\u003C/b\u003E, and a total of \u003Cb\u003E232 calories\u003C/b\u003E. This recipe serves 3. For \u003Cb\u003E$1.44 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 20%\u003C/b\u003E of your daily requirements of vitamins and minerals. A mixture of mirepoix, hot sauce, juice of lemon, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. From preparation to the plate, this recipe takes around \u003Cb\u003E45 minutes\u003C/b\u003E. Only a few people made this recipe, and 5 would say it hit the spot. Overall, this recipe earns a \u003Cb\u003Epretty good spoonacular score of 70%\u003C/b\u003E. If you like this recipe, you might also like recipes such as \u003Ca href="https://spoonacular.com/recipes/spicy-tuna-cakes-1584517"\u003ESpicy Tuna Cakes\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/spicy-tuna-cakes-1305729"\u003ESpicy Tuna Cakes\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/spicy-tuna-cakes-1310663"\u003ESpicy Tuna Cakes\u003C/a\u003E.',
                    cuisines: [],
                    dishTypes: [],
                    diets: ["pescatarian"],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003ECombine all ingredients except the breadcrumbs.\u003C/li\u003E\u003Cli\u003EAdd panko 1 cup at a time until desired thickness (1 cup may be enough).\u003C/li\u003E\u003Cli\u003EMake 6 cakes. Place on a plate and let sit in the fridge for 30 minutes to form.\u003C/li\u003E\u003Cli\u003EMix 1/4 cup panko and some Cajun seasoning in a shallow dish or plate.\u003C/li\u003E\u003Cli\u003ECover with panko mixture and spray pan with cooking spray and saute for 3 minutes on each side.\u003C/li\u003E\u003Cli\u003ESpray with cooking spray before flipping each cake.\u003C/li\u003E\u003Cli\u003EServe with your favorite sauce. I like fresh squeezed lemon juice and butter.\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Combine all ingredients except the breadcrumbs.",
                                    ingredients: [
                                        {
                                            id: 18079,
                                            name: "breadcrumbs",
                                            localizedName: "breadcrumbs",
                                            image: "breadcrumbs.jpg",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 2,
                                    step: "Add panko 1 cup at a time until desired thickness (1 cup may be enough).Make 6 cakes.",
                                    ingredients: [
                                        {
                                            id: 10018079,
                                            name: "panko",
                                            localizedName: "panko",
                                            image: "panko.jpg",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 3,
                                    step: "Place on a plate and let sit in the fridge for 30 minutes to form.",
                                    ingredients: [],
                                    equipment: [],
                                    length: {
                                        number: 30,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 4,
                                    step: "Mix 1/4 cup panko and some Cajun seasoning in a shallow dish or plate.Cover with panko mixture and spray pan with cooking spray and saute for 3 minutes on each side.Spray with cooking spray before flipping each cake.",
                                    ingredients: [
                                        {
                                            id: 1032028,
                                            name: "cajun seasoning",
                                            localizedName: "cajun seasoning",
                                            image: "chili-powder.jpg",
                                        },
                                        {
                                            id: 4679,
                                            name: "cooking spray",
                                            localizedName: "cooking spray",
                                            image: "cooking-spray.png",
                                        },
                                        {
                                            id: 10018079,
                                            name: "panko",
                                            localizedName: "panko",
                                            image: "panko.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404645,
                                            name: "frying pan",
                                            localizedName: "frying pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
                                        },
                                    ],
                                    length: {
                                        number: 3,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 5,
                                    step: "Serve with your favorite sauce. I like fresh squeezed lemon juice and butter.",
                                    ingredients: [
                                        {
                                            id: 9152,
                                            name: "lemon juice",
                                            localizedName: "lemon juice",
                                            image: "lemon-juice.jpg",
                                        },
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 0,
                                            name: "sauce",
                                            localizedName: "sauce",
                                            image: "",
                                        },
                                    ],
                                    equipment: [],
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 73.9353637695313,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/spicy-tuna-cakes-661218",
                },
                {
                    vegetarian: false,
                    vegan: false,
                    glutenFree: true,
                    dairyFree: true,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 4,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 80,
                    healthScore: 52,
                    creditsText:
                        "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                    license: "CC BY 3.0",
                    sourceName: "Foodista",
                    pricePerServing: 259.09,
                    extendedIngredients: [
                        {
                            id: 12195,
                            aisle: "Nut butters, Jams, and Honey",
                            image: "nut-butter.png",
                            consistency: "SOLID",
                            name: "natural almond butter",
                            nameClean: "nut butter",
                            original:
                                "2 tablespoons unsalted natural almond butter",
                            originalName: "unsalted natural almond butter",
                            amount: 2,
                            unit: "tablespoons",
                            meta: ["unsalted"],
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
                            id: 12195,
                            aisle: "Nut butters, Jams, and Honey",
                            image: "almond-butter.jpg",
                            consistency: "SOLID",
                            name: "natural almond butter",
                            nameClean: "nut butter",
                            original:
                                "2 tablespoons unsalted natural almond butter",
                            originalName: "unsalted natural almond butter",
                            amount: 2,
                            unit: "tablespoons",
                            meta: ["unsalted"],
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
                            id: 93607,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "almond-milk.png",
                            consistency: "LIQUID",
                            name: "almond milk",
                            nameClean: "almond milk",
                            original: "1 1/2 cups unsweetened almond milk",
                            originalName: "unsweetened almond milk",
                            amount: 1.5,
                            unit: "cups",
                            meta: ["unsweetened"],
                            measures: {
                                us: {
                                    amount: 1.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 375,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 9040,
                            aisle: "Produce",
                            image: "bananas.jpg",
                            consistency: "SOLID",
                            name: "banana",
                            nameClean: "banana",
                            original: "1 medium frozen banana",
                            originalName: "frozen banana",
                            amount: 1,
                            unit: "medium",
                            meta: ["frozen"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "medium",
                                    unitLong: "medium",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "medium",
                                    unitLong: "medium",
                                },
                            },
                        },
                        {
                            id: 12006,
                            aisle: "Health Foods",
                            image: "chia-seeds.jpg",
                            consistency: "SOLID",
                            name: "chia seeds",
                            nameClean: "chia seeds",
                            original: "2 teaspoons chia seeds",
                            originalName: "chia seeds",
                            amount: 2,
                            unit: "teaspoons",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 11233,
                            aisle: "Produce",
                            image: "kale.jpg",
                            consistency: "SOLID",
                            name: "baby kale",
                            nameClean: "kale",
                            original: "1 cup baby kale, packed",
                            originalName: "baby kale, packed",
                            amount: 1,
                            unit: "cup",
                            meta: ["packed"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "cup",
                                    unitLong: "cup",
                                },
                                metric: {
                                    amount: 21,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 9176,
                            aisle: "Produce",
                            image: "mango.jpg",
                            consistency: "SOLID",
                            name: "mango pieces",
                            nameClean: "mango",
                            original: "1/2 cup frozen mango pieces",
                            originalName: "frozen mango pieces",
                            amount: 0.5,
                            unit: "cup",
                            meta: ["frozen"],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 82.5,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 98932,
                            aisle: "Tea and Coffee",
                            image: "matcha-powder.jpg",
                            consistency: "SOLID",
                            name: "matcha tea powder",
                            nameClean: "matcha",
                            original: "1 tablespoon matcha green tea powder",
                            originalName: "matcha green tea powder",
                            amount: 1,
                            unit: "tablespoon",
                            meta: ["green"],
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
                            id: 9266,
                            aisle: "Produce",
                            image: "pineapple.jpg",
                            consistency: "SOLID",
                            name: "pineapple",
                            nameClean: "pineapple",
                            original: "3/4 cup frozen pineapple",
                            originalName: "frozen pineapple",
                            amount: 0.75,
                            unit: "cup",
                            meta: ["frozen"],
                            measures: {
                                us: {
                                    amount: 0.75,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 123.75,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 2050,
                            aisle: "Baking",
                            image: "vanilla-extract.jpg",
                            consistency: "LIQUID",
                            name: "vanilla extract",
                            nameClean: "vanilla extract",
                            original: "1/2 teaspoon vanilla extract",
                            originalName: "vanilla extract",
                            amount: 0.5,
                            unit: "teaspoon",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 0.5,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                    ],
                    id: 756814,
                    title: "Powerhouse Almond Matcha Superfood Smoothie",
                    readyInMinutes: 10,
                    servings: 2,
                    sourceUrl:
                        "https://www.foodista.com/blog/2015/05/17/powehouse-almond-matcha-superfood-smoothie",
                    image: "https://img.spoonacular.com/recipes/756814-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Powerhouse Almond Matcha Superfood Smoothie is a breakfast that serves 2. One serving contains \u003Cb\u003E289 calories\u003C/b\u003E, \u003Cb\u003E11g of protein\u003C/b\u003E, and \u003Cb\u003E13g of fat\u003C/b\u003E. For \u003Cb\u003E$2.59 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 27%\u003C/b\u003E of your daily requirements of vitamins and minerals. If you have chia seeds, matcha tea powder, banana, and a few other ingredients on hand, you can make it. It is a good option if you\'re following a \u003Cb\u003Egluten free, dairy free, and whole 30\u003C/b\u003E diet. This recipe from Foodista has 80 fans. From preparation to the plate, this recipe takes around \u003Cb\u003E10 minutes\u003C/b\u003E. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 98%\u003C/b\u003E. This score is awesome. If you like this recipe, take a look at these similar recipes: \u003Ca href="https://spoonacular.com/recipes/powerhouse-almond-matcha-superfood-smoothie-1244781"\u003EPowerhouse Almond Matcha Superfood Smoothie\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/chocolate-almond-superfood-smoothie-1600269"\u003EChocolate Almond Superfood Smoothie\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/powerhouse-golden-turmeric-smoothie-882363"\u003EPowerhouse Golden Turmeric Smoothie\u003C/a\u003E.',
                    cuisines: [],
                    dishTypes: [
                        "morning meal",
                        "brunch",
                        "beverage",
                        "breakfast",
                        "drink",
                    ],
                    diets: ["gluten free", "dairy free"],
                    occasions: [],
                    instructions:
                        "\u003Cp\u003ECombine all of the ingredients in a blender. Blend on high until smooth. Serve immediately.\u003C/p\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Combine all of the ingredients in a blender. Blend on high until smooth.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404726,
                                            name: "blender",
                                            localizedName: "blender",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/blender.png",
                                        },
                                    ],
                                },
                                {
                                    number: 2,
                                    step: "Serve immediately.",
                                    ingredients: [],
                                    equipment: [],
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 98.0940017700195,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/powerhouse-almond-matcha-superfood-smoothie-756814",
                },
                {
                    vegetarian: true,
                    vegan: false,
                    glutenFree: false,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 11,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 2,
                    healthScore: 1,
                    creditsText:
                        "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                    license: "CC BY 3.0",
                    sourceName: "Foodista",
                    pricePerServing: 38.22,
                    extendedIngredients: [
                        {
                            id: 9040,
                            aisle: "Produce",
                            image: "bananas.jpg",
                            consistency: "SOLID",
                            name: "bananas",
                            nameClean: "banana",
                            original: "3 very ripe bananas",
                            originalName: "very ripe bananas",
                            amount: 3,
                            unit: "",
                            meta: ["very ripe"],
                            measures: {
                                us: {
                                    amount: 3,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 3,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 20081,
                            aisle: "Baking",
                            image: "flour.png",
                            consistency: "SOLID",
                            name: "flour",
                            nameClean: "wheat flour",
                            original: "1 1/2 cups flour",
                            originalName: "flour",
                            amount: 1.5,
                            unit: "cups",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 187.5,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 10719335,
                            aisle: "Baking",
                            image: "sugar-in-bowl.png",
                            consistency: "SOLID",
                            name: "granulated sugar",
                            nameClean: "granulated sugar",
                            original: "3/4 cup granulated sugar",
                            originalName: "granulated sugar",
                            amount: 0.75,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.75,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 150,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1001,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "butter-sliced.jpg",
                            consistency: "SOLID",
                            name: "butter",
                            nameClean: "butter",
                            original: "1/3 cup melted butter",
                            originalName: "melted butter",
                            amount: 0.33333334,
                            unit: "cup",
                            meta: ["melted"],
                            measures: {
                                us: {
                                    amount: 0.33333334,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 75.667,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1123,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "egg.png",
                            consistency: "SOLID",
                            name: "egg",
                            nameClean: "egg",
                            original: "1 egg",
                            originalName: "egg",
                            amount: 1,
                            unit: "",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 1052050,
                            aisle: "Baking",
                            image: "vanilla.jpg",
                            consistency: "SOLID",
                            name: "vanilla",
                            nameClean: "vanilla",
                            original: "1 teaspoon vanilla",
                            originalName: "vanilla",
                            amount: 1,
                            unit: "teaspoon",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
                                },
                            },
                        },
                        {
                            id: 18372,
                            aisle: "Baking",
                            image: "white-powder.jpg",
                            consistency: "SOLID",
                            name: "baking soda",
                            nameClean: "baking soda",
                            original: "1 teaspoon baking soda",
                            originalName: "baking soda",
                            amount: 1,
                            unit: "teaspoon",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
                                },
                                metric: {
                                    amount: 1,
                                    unitShort: "tsp",
                                    unitLong: "teaspoon",
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
                            original: "1/4 teaspoon salt",
                            originalName: "salt",
                            amount: 0.25,
                            unit: "teaspoon",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 10112155,
                            aisle: "Baking",
                            image: "walnuts.jpg",
                            consistency: "SOLID",
                            name: "walnuts",
                            nameClean: "walnut pieces",
                            original: "1/3 cup chopped walnuts",
                            originalName: "chopped walnuts",
                            amount: 0.33333334,
                            unit: "cup",
                            meta: ["chopped"],
                            measures: {
                                us: {
                                    amount: 0.33333334,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 39,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                    ],
                    id: 1098347,
                    title: "Homemade Banana Bread",
                    readyInMinutes: 75,
                    servings: 8,
                    sourceUrl:
                        "https://www.foodista.com/recipe/W238PV7B/mom-s-best-homemade-banana-bread",
                    image: "https://img.spoonacular.com/recipes/1098347-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Homemade Banana Bread is a \u003Cb\u003Elacto ovo vegetarian\u003C/b\u003E recipe with 8 servings. For \u003Cb\u003E38 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 7%\u003C/b\u003E of your daily requirements of vitamins and minerals. One serving contains \u003Cb\u003E306 calories\u003C/b\u003E, \u003Cb\u003E4g of protein\u003C/b\u003E, and \u003Cb\u003E12g of fat\u003C/b\u003E. Not a lot of people made this recipe, and 2 would say it hit the spot. This recipe from Foodista requires baking soda, flour, granulated sugar, and vanilla. It works well as a breakfast. From preparation to the plate, this recipe takes around \u003Cb\u003E1 hour and 15 minutes\u003C/b\u003E. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 24%\u003C/b\u003E. This score is rather bad. \u003Ca href="https://spoonacular.com/recipes/homemade-banana-bread-1519411"\u003EHomemade Banana Bread\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/homemade-banana-bread-378277"\u003EHomemade Banana Bread\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/homemade-banana-bread-1381023"\u003EHomemade Banana Bread\u003C/a\u003E are very similar to this recipe.',
                    cuisines: [],
                    dishTypes: [
                        "morning meal",
                        "dessert",
                        "brunch",
                        "breakfast",
                    ],
                    diets: ["lacto ovo vegetarian"],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003EPreheat oven to 350 degrees.\u003C/li\u003E\u003Cli\u003EBeat together butter, sugar, vanilla, egg.\u003C/li\u003E\u003Cli\u003EAdd bananas.\u003C/li\u003E\u003Cli\u003EWith a potato masher or a fork, mash in banana and mix well.\u003C/li\u003E\u003Cli\u003EAdd flour, baking soda, and salt.\u003C/li\u003E\u003Cli\u003EStir until everything is combined.\u003C/li\u003E\u003Cli\u003EAdd nuts and stir again.\u003C/li\u003E\u003Cli\u003ESpray a loaf pan with non-stick cooking spray.\u003C/li\u003E\u003Cli\u003EPour mixture into loaf pan.\u003C/li\u003E\u003Cli\u003ECook for 55-65 minutes or until an inserted tooth pick comes out clean.\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Preheat oven to 350 degrees.Beat together butter, sugar, vanilla, egg.",
                                    ingredients: [
                                        {
                                            id: 1052050,
                                            name: "vanilla",
                                            localizedName: "vanilla",
                                            image: "vanilla.jpg",
                                        },
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 19335,
                                            name: "sugar",
                                            localizedName: "sugar",
                                            image: "sugar-in-bowl.png",
                                        },
                                        {
                                            id: 1123,
                                            name: "egg",
                                            localizedName: "egg",
                                            image: "egg.png",
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
                                },
                                {
                                    number: 2,
                                    step: "Add bananas.With a potato masher or a fork, mash in banana and mix well.",
                                    ingredients: [
                                        {
                                            id: 9040,
                                            name: "banana",
                                            localizedName: "banana",
                                            image: "bananas.jpg",
                                        },
                                        {
                                            id: 11352,
                                            name: "potato",
                                            localizedName: "potato",
                                            image: "potatoes-yukon-gold.png",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404763,
                                            name: "potato masher",
                                            localizedName: "potato masher",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/potato-masher.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 3,
                                    step: "Add flour, baking soda, and salt.Stir until everything is combined.",
                                    ingredients: [
                                        {
                                            id: 18372,
                                            name: "baking soda",
                                            localizedName: "baking soda",
                                            image: "white-powder.jpg",
                                        },
                                        {
                                            id: 20081,
                                            name: "all purpose flour",
                                            localizedName: "all purpose flour",
                                            image: "flour.png",
                                        },
                                        {
                                            id: 2047,
                                            name: "salt",
                                            localizedName: "salt",
                                            image: "salt.jpg",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 4,
                                    step: "Add nuts and stir again.Spray a loaf pan with non-stick cooking spray.",
                                    ingredients: [
                                        {
                                            id: 4679,
                                            name: "cooking spray",
                                            localizedName: "cooking spray",
                                            image: "cooking-spray.png",
                                        },
                                        {
                                            id: 12135,
                                            name: "nuts",
                                            localizedName: "nuts",
                                            image: "nuts-mixed.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404715,
                                            name: "loaf pan",
                                            localizedName: "loaf pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/loaf-pan.png",
                                        },
                                    ],
                                },
                                {
                                    number: 5,
                                    step: "Pour mixture into loaf pan.Cook for 55-65 minutes or until an inserted tooth pick comes out clean.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404715,
                                            name: "loaf pan",
                                            localizedName: "loaf pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/loaf-pan.png",
                                        },
                                    ],
                                    length: {
                                        number: 65,
                                        unit: "minutes",
                                    },
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 29.0693855285645,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/homemade-banana-bread-1098347",
                },
                {
                    vegetarian: false,
                    vegan: false,
                    glutenFree: false,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 21,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 80,
                    healthScore: 9,
                    creditsText: "foodista.com",
                    sourceName: "foodista.com",
                    pricePerServing: 176.32,
                    extendedIngredients: [
                        {
                            id: 1002030,
                            aisle: "Spices and Seasonings",
                            image: "pepper.jpg",
                            consistency: "SOLID",
                            name: "pepper",
                            nameClean: "black pepper",
                            original:
                                "1/4 teaspoon freshly ground black pepper",
                            originalName: "freshly ground black pepper",
                            amount: 0.25,
                            unit: "teaspoon",
                            meta: ["black", "freshly ground"],
                            measures: {
                                us: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 2031,
                            aisle: "Spices and Seasonings",
                            image: "chili-powder.jpg",
                            consistency: "SOLID",
                            name: "cayenne pepper",
                            nameClean: "ground cayenne pepper",
                            original: "1/4 teaspoon cayenne pepper",
                            originalName: "cayenne pepper",
                            amount: 0.25,
                            unit: "teaspoon",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 10120499,
                            aisle: "Pasta and Rice",
                            image: "elbow.jpg",
                            consistency: "SOLID",
                            name: "elbow macaroni",
                            nameClean: "elbow macaroni",
                            original: "1 pound elbow macaroni",
                            originalName: "elbow macaroni",
                            amount: 1,
                            unit: "pound",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "lb",
                                    unitLong: "pound",
                                },
                                metric: {
                                    amount: 453.592,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 20081,
                            aisle: "Baking",
                            image: "flour.png",
                            consistency: "SOLID",
                            name: "flour",
                            nameClean: "wheat flour",
                            original: "1/2 cup all-purpose flour",
                            originalName: "all-purpose flour",
                            amount: 0.5,
                            unit: "cup",
                            meta: ["all-purpose"],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 62.5,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1023,
                            aisle: "Cheese",
                            image: "gruyere.jpg",
                            consistency: "SOLID",
                            name: "gruyere",
                            nameClean: "gruyere",
                            original: "2 cups (about 8 ounces) grated Gruyere",
                            originalName: "cups (about grated Gruyere",
                            amount: 8,
                            unit: "ounces",
                            meta: ["grated"],
                            measures: {
                                us: {
                                    amount: 8,
                                    unitShort: "oz",
                                    unitLong: "ounces",
                                },
                                metric: {
                                    amount: 226.796,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1082047,
                            aisle: "Spices and Seasonings",
                            image: "salt.jpg",
                            consistency: "SOLID",
                            name: "kosher salt",
                            nameClean: "kosher salt",
                            original: "2 teaspoons kosher salt",
                            originalName: "kosher salt",
                            amount: 2,
                            unit: "teaspoons",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 2,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 2025,
                            aisle: "Spices and Seasonings",
                            image: "ground-nutmeg.jpg",
                            consistency: "SOLID",
                            name: "nutmeg",
                            nameClean: "nutmeg",
                            original: "1/4 teaspoon freshly grated nutmeg",
                            originalName: "freshly grated nutmeg",
                            amount: 0.25,
                            unit: "teaspoon",
                            meta: ["freshly grated"],
                            measures: {
                                us: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                                metric: {
                                    amount: 0.25,
                                    unitShort: "tsps",
                                    unitLong: "teaspoons",
                                },
                            },
                        },
                        {
                            id: 1145,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "butter-sliced.jpg",
                            consistency: "SOLID",
                            name: "butter",
                            nameClean: "unsalted butter",
                            original:
                                "8 tablespoons (1 stick) unsalted butter, plus more for dish",
                            originalName:
                                "(1 stick) unsalted butter, plus more for dish",
                            amount: 8,
                            unit: "tablespoons",
                            meta: [
                                "unsalted",
                                "plus more for dish",
                                "(1 stick)",
                            ],
                            measures: {
                                us: {
                                    amount: 8,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                                metric: {
                                    amount: 8,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                            },
                        },
                        {
                            id: 18069,
                            aisle: "Bakery/Bread",
                            image: "white-bread.jpg",
                            consistency: "SOLID",
                            name: "bread",
                            nameClean: "white bread",
                            original: "6 slices white bread",
                            originalName: "white bread",
                            amount: 6,
                            unit: "slices",
                            meta: ["white"],
                            measures: {
                                us: {
                                    amount: 6,
                                    unitShort: "slice",
                                    unitLong: "slices",
                                },
                                metric: {
                                    amount: 6,
                                    unitShort: "slice",
                                    unitLong: "slices",
                                },
                            },
                        },
                        {
                            id: 1011009,
                            aisle: "Cheese",
                            image: "cheddar-block.jpg",
                            consistency: "SOLID",
                            name: "cheddar cheese",
                            nameClean: "white cheddar cheese",
                            original:
                                "4 1/2 cups (about 18 ounces) grated white cheddar cheese",
                            originalName:
                                "1/2 cups (about grated white cheddar cheese",
                            amount: 18,
                            unit: "ounces",
                            meta: ["white", "grated"],
                            measures: {
                                us: {
                                    amount: 18,
                                    unitShort: "oz",
                                    unitLong: "ounces",
                                },
                                metric: {
                                    amount: 510.291,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1011077,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "milk.png",
                            consistency: "LIQUID",
                            name: "milk",
                            nameClean: "whole milk",
                            original: "5 1/2 cups whole milk",
                            originalName: "whole milk",
                            amount: 5.5,
                            unit: "cups",
                            meta: ["whole"],
                            measures: {
                                us: {
                                    amount: 5.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 1.342,
                                    unitShort: "l",
                                    unitLong: "liters",
                                },
                            },
                        },
                    ],
                    id: 634873,
                    title: "Best Baked Macaroni and Cheese",
                    readyInMinutes: 45,
                    servings: 12,
                    sourceUrl:
                        "https://www.foodista.com/recipe/H3FCFX57/best-baked-macaroni-and-cheese",
                    image: "https://img.spoonacular.com/recipes/634873-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Best Baked Macaroni and Cheese might be just the \u003Cb\u003EAmerican\u003C/b\u003E recipe you are searching for. This recipe serves 12. This main course has \u003Cb\u003E579 calories\u003C/b\u003E, \u003Cb\u003E26g of protein\u003C/b\u003E, and \u003Cb\u003E33g of fat\u003C/b\u003E per serving. For \u003Cb\u003E$1.76 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 19%\u003C/b\u003E of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 80 people found this recipe to be yummy and satisfying. Head to the store and pick up kosher salt, bread, elbow macaroni, and a few other things to make it today. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. With a spoonacular \u003Cb\u003Escore of 61%\u003C/b\u003E, this dish is solid. Users who liked this recipe also liked \u003Ca href="https://spoonacular.com/recipes/baked-macaroni-cheese-139360"\u003EBaked Macaroni & Cheese\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/baked-macaroni-and-cheese-215144"\u003EBaked Macaroni and Cheese\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/baked-macaroni-and-cheese-303824"\u003EBaked Macaroni and Cheese\u003C/a\u003E.',
                    cuisines: ["American"],
                    dishTypes: [
                        "side dish",
                        "lunch",
                        "main course",
                        "main dish",
                        "dinner",
                    ],
                    diets: [],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003EHeat the oven to 375 degrees. Butter a 3-quart casserole dish; set aside. Place bread pieces in a medium bowl. In a small saucepan over medium heat, melt 2 tablespoons butter. Pour butter into the bowl with bread, and toss. Set the breadcrumbs aside. In a medium saucepan set over medium heat, heat milk. Melt remaining 6 tablespoons butter in a high-sided skillet over medium heat. When butter bubbles, add flour. Cook, stirring, 1 minute.\u003C/li\u003E\u003Cli\u003ESlowly pour hot milk into flour-butter mixture while whisking. Continue cooking, whisking constantly, until the mixture bubbles and becomes thick.\u003C/li\u003E\u003Cli\u003ERemove the pan from the heat. Stir in salt, nutmeg, black pepper, cayenne pepper, 3 cups cheddar, and 1 1/2 cups Gruyere. Set cheese sauce aside.\u003C/li\u003E\u003Cli\u003EFill a large saucepan with water. Bring to a boil. Add macaroni; cook 2 to 3 fewer minutes than manufacturers directions, until outside of pasta is cooked and inside is underdone. (Different brands of macaroni cook at different rates; be sure to read the instructions.) Transfer the macaroni to a colander, rinse under cold running water, and drain well. Stir macaroni into the reserved cheese sauce.\u003C/li\u003E\u003Cli\u003EPour the mixture into the prepared casserole dish. Sprinkle remaining 1 1/2 cups cheddar and 1/2 cup Gruyere; scatter breadcrumbs over the top. Bake until browned on top, about 30 minutes. Transfer dish to a wire rack to cool for 5 minutes; serve.\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Heat the oven to 375 degrees. Butter a 3-quart casserole dish; set aside.",
                                    ingredients: [
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404635,
                                            name: "casserole dish",
                                            localizedName: "casserole dish",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/casserole-dish.png",
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
                                    number: 2,
                                    step: "Place bread pieces in a medium bowl. In a small saucepan over medium heat, melt 2 tablespoons butter.",
                                    ingredients: [
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 18064,
                                            name: "bread",
                                            localizedName: "bread",
                                            image: "white-bread.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404669,
                                            name: "sauce pan",
                                            localizedName: "sauce pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg",
                                        },
                                        {
                                            id: 404783,
                                            name: "bowl",
                                            localizedName: "bowl",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 3,
                                    step: "Pour butter into the bowl with bread, and toss. Set the breadcrumbs aside. In a medium saucepan set over medium heat, heat milk. Melt remaining 6 tablespoons butter in a high-sided skillet over medium heat. When butter bubbles, add flour. Cook, stirring, 1 minute.Slowly pour hot milk into flour-butter mixture while whisking. Continue cooking, whisking constantly, until the mixture bubbles and becomes thick.",
                                    ingredients: [
                                        {
                                            id: 18079,
                                            name: "breadcrumbs",
                                            localizedName: "breadcrumbs",
                                            image: "breadcrumbs.jpg",
                                        },
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 18064,
                                            name: "bread",
                                            localizedName: "bread",
                                            image: "white-bread.jpg",
                                        },
                                        {
                                            id: 20081,
                                            name: "all purpose flour",
                                            localizedName: "all purpose flour",
                                            image: "flour.png",
                                        },
                                        {
                                            id: 1077,
                                            name: "milk",
                                            localizedName: "milk",
                                            image: "milk.png",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404661,
                                            name: "whisk",
                                            localizedName: "whisk",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/whisk.png",
                                        },
                                        {
                                            id: 404669,
                                            name: "sauce pan",
                                            localizedName: "sauce pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg",
                                        },
                                        {
                                            id: 404645,
                                            name: "frying pan",
                                            localizedName: "frying pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
                                        },
                                        {
                                            id: 404783,
                                            name: "bowl",
                                            localizedName: "bowl",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 1,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 4,
                                    step: "Remove the pan from the heat. Stir in salt, nutmeg, black pepper, cayenne pepper, 3 cups cheddar, and 1 1/2 cups Gruyere. Set cheese sauce aside.Fill a large saucepan with water. Bring to a boil.",
                                    ingredients: [
                                        {
                                            id: 2031,
                                            name: "cayenne pepper",
                                            localizedName: "cayenne pepper",
                                            image: "chili-powder.jpg",
                                        },
                                        {
                                            id: 1002030,
                                            name: "black pepper",
                                            localizedName: "black pepper",
                                            image: "pepper.jpg",
                                        },
                                        {
                                            id: 0,
                                            name: "cheese sauce",
                                            localizedName: "cheese sauce",
                                            image: "",
                                        },
                                        {
                                            id: 1009,
                                            name: "cheddar cheese",
                                            localizedName: "cheddar cheese",
                                            image: "cheddar-cheese.png",
                                        },
                                        {
                                            id: 1023,
                                            name: "gruyere",
                                            localizedName: "gruyere",
                                            image: "gruyere.jpg",
                                        },
                                        {
                                            id: 2025,
                                            name: "nutmeg",
                                            localizedName: "nutmeg",
                                            image: "ground-nutmeg.jpg",
                                        },
                                        {
                                            id: 14412,
                                            name: "water",
                                            localizedName: "water",
                                            image: "water.png",
                                        },
                                        {
                                            id: 2047,
                                            name: "salt",
                                            localizedName: "salt",
                                            image: "salt.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404669,
                                            name: "sauce pan",
                                            localizedName: "sauce pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg",
                                        },
                                        {
                                            id: 404645,
                                            name: "frying pan",
                                            localizedName: "frying pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
                                        },
                                    ],
                                },
                                {
                                    number: 5,
                                    step: "Add macaroni; cook 2 to 3 fewer minutes than manufacturers directions, until outside of pasta is cooked and inside is underdone. (Different brands of macaroni cook at different rates; be sure to read the instructions.)",
                                    ingredients: [
                                        {
                                            id: 20499,
                                            name: "macaroni",
                                            localizedName: "macaroni",
                                            image: "macaroni.png",
                                        },
                                        {
                                            id: 20420,
                                            name: "pasta",
                                            localizedName: "pasta",
                                            image: "https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 6,
                                    step: "Transfer the macaroni to a colander, rinse under cold running water, and drain well. Stir macaroni into the reserved cheese sauce.",
                                    ingredients: [
                                        {
                                            id: 0,
                                            name: "cheese sauce",
                                            localizedName: "cheese sauce",
                                            image: "",
                                        },
                                        {
                                            id: 20499,
                                            name: "macaroni",
                                            localizedName: "macaroni",
                                            image: "macaroni.png",
                                        },
                                        {
                                            id: 14412,
                                            name: "water",
                                            localizedName: "water",
                                            image: "water.png",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404639,
                                            name: "colander",
                                            localizedName: "colander",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/colander.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 7,
                                    step: "Pour the mixture into the prepared casserole dish.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404635,
                                            name: "casserole dish",
                                            localizedName: "casserole dish",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/casserole-dish.png",
                                        },
                                    ],
                                },
                                {
                                    number: 8,
                                    step: "Sprinkle remaining 1 1/2 cups cheddar and 1/2 cup Gruyere; scatter breadcrumbs over the top.",
                                    ingredients: [
                                        {
                                            id: 18079,
                                            name: "breadcrumbs",
                                            localizedName: "breadcrumbs",
                                            image: "breadcrumbs.jpg",
                                        },
                                        {
                                            id: 1009,
                                            name: "cheddar cheese",
                                            localizedName: "cheddar cheese",
                                            image: "cheddar-cheese.png",
                                        },
                                        {
                                            id: 1023,
                                            name: "gruyere",
                                            localizedName: "gruyere",
                                            image: "gruyere.jpg",
                                        },
                                    ],
                                    equipment: [],
                                },
                                {
                                    number: 9,
                                    step: "Bake until browned on top, about 30 minutes.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 30,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 10,
                                    step: "Transfer dish to a wire rack to cool for 5 minutes; serve.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 405900,
                                            name: "wire rack",
                                            localizedName: "wire rack",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 5,
                                        unit: "minutes",
                                    },
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 64.8261795043945,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/best-baked-macaroni-and-cheese-634873",
                },
                {
                    vegetarian: true,
                    vegan: false,
                    glutenFree: true,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 1,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 62,
                    healthScore: 7,
                    creditsText: "foodista.com",
                    sourceName: "foodista.com",
                    pricePerServing: 63.86,
                    extendedIngredients: [
                        {
                            id: 14412,
                            aisle: "Beverages",
                            image: "water.png",
                            consistency: "LIQUID",
                            name: "water",
                            nameClean: "water",
                            original: "1 cup water",
                            originalName: "water",
                            amount: 1,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "cup",
                                    unitLong: "cup",
                                },
                                metric: {
                                    amount: 236.588,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 13311111,
                            aisle: "Tea and Coffee",
                            image: "tea-bags.jpg",
                            consistency: "SOLID",
                            name: "tea bags",
                            nameClean: "green tea bag",
                            original: "3 Bigelow® Green Tea Bags*",
                            originalName: "Bigelow® Green Tea Bags",
                            amount: 3,
                            unit: "",
                            meta: ["green", "bigelow®"],
                            measures: {
                                us: {
                                    amount: 3,
                                    unitShort: "",
                                    unitLong: "",
                                },
                                metric: {
                                    amount: 3,
                                    unitShort: "",
                                    unitLong: "",
                                },
                            },
                        },
                        {
                            id: 9316,
                            aisle: "Produce",
                            image: "strawberries.png",
                            consistency: "SOLID",
                            name: "berries",
                            nameClean: "strawberries",
                            original:
                                "1 cup fresh berries, choose from raspberries, blueberries,or strawberries",
                            originalName:
                                "fresh berries, choose from raspberries, blueberries,or strawberries",
                            amount: 1,
                            unit: "cup",
                            meta: ["fresh"],
                            measures: {
                                us: {
                                    amount: 1,
                                    unitShort: "cup",
                                    unitLong: "cup",
                                },
                                metric: {
                                    amount: 144,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 9273,
                            aisle: "Beverages",
                            image: "pineapple-juice.jpg",
                            consistency: "LIQUID",
                            name: "pineapple juice",
                            nameClean: "pineapple juice",
                            original: "¼ cup pineapple juice",
                            originalName: "pineapple juice",
                            amount: 0.25,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.25,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 59,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 1119,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "vanilla-yogurt.png",
                            consistency: "LIQUID",
                            name: "vanilla yogurt",
                            nameClean: "vanilla yogurt",
                            original: "½ cup vanilla yogurt",
                            originalName: "vanilla yogurt",
                            amount: 0.5,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 122.5,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 10014412,
                            aisle: "Frozen",
                            image: "ice-cubes.png",
                            consistency: "SOLID",
                            name: "ice cubes",
                            nameClean: "ice",
                            original: "½ cup ice cubes",
                            originalName: "ice cubes",
                            amount: 0.5,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.5,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 118.294,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                    ],
                    id: 645530,
                    title: "Green Tea Fruit Medley Smoothie",
                    readyInMinutes: 45,
                    servings: 4,
                    sourceUrl:
                        "https://www.foodista.com/recipe/MCHKDTHW/green-tea-fruit-medley-smoothie",
                    image: "https://img.spoonacular.com/recipes/645530-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Green Tea Fruit Medley Smoothie is a \u003Cb\u003Egluten free, lacto ovo vegetarian, and primal\u003C/b\u003E recipe with 4 servings. One portion of this dish contains around \u003Cb\u003E2g of protein\u003C/b\u003E, \u003Cb\u003E1g of fat\u003C/b\u003E, and a total of \u003Cb\u003E45 calories\u003C/b\u003E. For \u003Cb\u003E64 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 4%\u003C/b\u003E of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 62 people found this recipe to be yummy and satisfying. A couple people really liked this breakfast. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. Head to the store and pick up water, pineapple juice, ice cubes, and a few other things to make it today. With a spoonacular \u003Cb\u003Escore of 40%\u003C/b\u003E, this dish is pretty good. If you like this recipe, take a look at these similar recipes: \u003Ca href="https://spoonacular.com/recipes/green-tea-fruit-medley-smoothie-1364147"\u003EGreen Tea Fruit Medley Smoothie\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/green-tea-fruit-medley-smoothie-1406645"\u003EGreen Tea Fruit Medley Smoothie\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/green-tea-fruit-medley-smoothie-1406283"\u003EGreen Tea Fruit Medley Smoothie\u003C/a\u003E.',
                    cuisines: [],
                    dishTypes: [
                        "morning meal",
                        "brunch",
                        "beverage",
                        "breakfast",
                        "drink",
                    ],
                    diets: ["gluten free", "lacto ovo vegetarian", "primal"],
                    occasions: [],
                    instructions:
                        "Prepare tea by steeping 3 Bigelow Green tea bags in 1 cup of boiling water for 5 minutes. Squeeze out bags and discard.\nCombine tea and remaining ingredients in blender and blend until smooth.",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Prepare tea by steeping 3 Bigelow Green tea bags in 1 cup of boiling water for 5 minutes. Squeeze out bags and discard.",
                                    ingredients: [
                                        {
                                            id: 13311111,
                                            name: "green tea bag",
                                            localizedName: "green tea bag",
                                            image: "tea-bags.jpg",
                                        },
                                        {
                                            id: 14412,
                                            name: "water",
                                            localizedName: "water",
                                            image: "water.png",
                                        },
                                        {
                                            id: 14355,
                                            name: "tea",
                                            localizedName: "tea",
                                            image: "tea-bags.jpg",
                                        },
                                    ],
                                    equipment: [],
                                    length: {
                                        number: 5,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 2,
                                    step: "Combine tea and remaining ingredients in blender and blend until smooth.",
                                    ingredients: [
                                        {
                                            id: 14355,
                                            name: "tea",
                                            localizedName: "tea",
                                            image: "tea-bags.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404726,
                                            name: "blender",
                                            localizedName: "blender",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/blender.png",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 3.40678310394287,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/green-tea-fruit-medley-smoothie-645530",
                },
                {
                    vegetarian: true,
                    vegan: false,
                    glutenFree: false,
                    dairyFree: false,
                    veryHealthy: false,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    lowFodmap: false,
                    weightWatcherSmartPoints: 5,
                    gaps: "no",
                    preparationMinutes: null,
                    cookingMinutes: null,
                    aggregateLikes: 2,
                    healthScore: 22,
                    creditsText:
                        "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                    license: "CC BY 3.0",
                    sourceName: "Foodista",
                    pricePerServing: 195.65,
                    extendedIngredients: [
                        {
                            id: 18079,
                            aisle: "Pasta and Rice",
                            image: "breadcrumbs.jpg",
                            consistency: "SOLID",
                            name: "breadcrumbs",
                            nameClean: "breadcrumbs",
                            original: "50 grams (1/3 cup) breadcrumbs",
                            originalName: "50 grams breadcrumbs",
                            amount: 0.33333334,
                            unit: "cup",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 0.33333334,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 36,
                                    unitShort: "ml",
                                    unitLong: "milliliters",
                                },
                            },
                        },
                        {
                            id: 11090,
                            aisle: "Produce",
                            image: "broccoli.jpg",
                            consistency: "SOLID",
                            name: "broccoli",
                            nameClean: "broccoli",
                            original: "200 grams (2 cups) broccoli",
                            originalName: "200 grams broccoli",
                            amount: 2,
                            unit: "cups",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "cups",
                                    unitLong: "cups",
                                },
                                metric: {
                                    amount: 176,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 1001,
                            aisle: "Milk, Eggs, Other Dairy",
                            image: "butter-sliced.jpg",
                            consistency: "SOLID",
                            name: "butter",
                            nameClean: "butter",
                            original: "30 grams (2 tablespoons) butter",
                            originalName: "30 grams butter",
                            amount: 2,
                            unit: "tablespoons",
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
                            id: 1007,
                            aisle: "Cheese",
                            image: "camembert.png",
                            consistency: "SOLID",
                            name: "camembert cheese cut cubes plus extra to put on top",
                            nameClean: "camembert",
                            original:
                                "50 grams ( - 2 ounces) Camembert cheese cut cubes plus extra to put on top",
                            originalName:
                                "50 grams Camembert cheese cut cubes plus extra to put on top",
                            amount: 2,
                            unit: "ounces",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 2,
                                    unitShort: "oz",
                                    unitLong: "ounces",
                                },
                                metric: {
                                    amount: 56.699,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 11135,
                            aisle: "Produce",
                            image: "cauliflower.jpg",
                            consistency: "SOLID",
                            name: "cauliflower",
                            nameClean: "cauliflower",
                            original: "1000g cauliflower (1 medium head)",
                            originalName: "cauliflower (1 medium head)",
                            amount: 1000,
                            unit: "g",
                            meta: ["(1 medium head)"],
                            measures: {
                                us: {
                                    amount: 2.205,
                                    unitShort: "lb",
                                    unitLong: "pounds",
                                },
                                metric: {
                                    amount: 1000,
                                    unitShort: "g",
                                    unitLong: "grams",
                                },
                            },
                        },
                        {
                            id: 20081,
                            aisle: "Baking",
                            image: "flour.png",
                            consistency: "SOLID",
                            name: "flour",
                            nameClean: "wheat flour",
                            original: "3 tablespoons of flour",
                            originalName: "flour",
                            amount: 3,
                            unit: "tablespoons",
                            meta: [],
                            measures: {
                                us: {
                                    amount: 3,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                                metric: {
                                    amount: 3,
                                    unitShort: "Tbsps",
                                    unitLong: "Tbsps",
                                },
                            },
                        },
                        {
                            id: 1002030,
                            aisle: "Spices and Seasonings",
                            image: "pepper.jpg",
                            consistency: "SOLID",
                            name: "salt",
                            nameClean: "black pepper",
                            original: "Salt, pepper to taste",
                            originalName: "Salt, pepper to taste",
                            amount: 4,
                            unit: "servings",
                            meta: ["to taste"],
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
                    ],
                    id: 637290,
                    title: "Cauliflower and Broccoli Gratin With Camembert Cheese",
                    readyInMinutes: 45,
                    servings: 4,
                    sourceUrl:
                        "https://www.foodista.com/recipe/GNB7QBRQ/cauliflower-and-broccoli-gratin-with-camembert-cheese",
                    image: "https://img.spoonacular.com/recipes/637290-556x370.jpg",
                    imageType: "jpg",
                    summary:
                        'Need a \u003Cb\u003Elacto ovo vegetarian side dish\u003C/b\u003E? Cauliflower and Broccoli Gratin With Camembert Cheese could be a tremendous recipe to try. This recipe serves 4 and costs $1.96 per serving. One portion of this dish contains about \u003Cb\u003E11g of protein\u003C/b\u003E, \u003Cb\u003E11g of fat\u003C/b\u003E, and a total of \u003Cb\u003E227 calories\u003C/b\u003E. 2 people have tried and liked this recipe. Head to the store and pick up breadcrumbs, flour, butter, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Esolid spoonacular score of 66%\u003C/b\u003E. Users who liked this recipe also liked \u003Ca href="https://spoonacular.com/recipes/broccoli-and-cauliflower-gratin-with-cheddar-cheese-29476"\u003EBroccoli and Cauliflower Gratin with Cheddar Cheese\u003C/a\u003E, \u003Ca href="https://spoonacular.com/recipes/broccoli-and-cauliflower-gratin-mac-n-cheese-286637"\u003EBroccoli and Cauliflower Gratin Mac n Cheese\u003C/a\u003E, and \u003Ca href="https://spoonacular.com/recipes/broccoli-and-cauliflower-au-gratin-29663"\u003EBroccoli And Cauliflower Au Gratin\u003C/a\u003E.',
                    cuisines: [],
                    dishTypes: ["side dish"],
                    diets: ["lacto ovo vegetarian"],
                    occasions: [],
                    instructions:
                        "\u003Col\u003E\u003Cli\u003EPreheat oven to 180 degrees C (350 F).\u003C/li\u003E\u003Cli\u003EParboil broccoli and cauliflower just until tender, about 10-15 minutes.\u003C/li\u003E\u003Cli\u003EHeat up saucepan and melt butter; stir in flour then milk; add cheese and stir until all melted; season with salt and pepper.\u003C/li\u003E\u003Cli\u003ECombine sauce with veggies and transfer to a baking dish; top with extra cheese and breadcrumbs.\u003C/li\u003E\u003Cli\u003EBake for 20 minutes or until browned on top.\u003C/li\u003E\u003C/ol\u003E",
                    analyzedInstructions: [
                        {
                            name: "",
                            steps: [
                                {
                                    number: 1,
                                    step: "Preheat oven to 180 degrees C (350 F).Parboil broccoli and cauliflower just until tender, about 10-15 minutes.",
                                    ingredients: [
                                        {
                                            id: 11135,
                                            name: "cauliflower",
                                            localizedName: "cauliflower",
                                            image: "cauliflower.jpg",
                                        },
                                        {
                                            id: 11090,
                                            name: "broccoli",
                                            localizedName: "broccoli",
                                            image: "broccoli.jpg",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                            temperature: {
                                                number: 180,
                                                unit: "Celsius",
                                            },
                                        },
                                    ],
                                    length: {
                                        number: 15,
                                        unit: "minutes",
                                    },
                                },
                                {
                                    number: 2,
                                    step: "Heat up saucepan and melt butter; stir in flour then milk; add cheese and stir until all melted; season with salt and pepper.",
                                    ingredients: [
                                        {
                                            id: 1102047,
                                            name: "salt and pepper",
                                            localizedName: "salt and pepper",
                                            image: "salt-and-pepper.jpg",
                                        },
                                        {
                                            id: 1001,
                                            name: "butter",
                                            localizedName: "butter",
                                            image: "butter-sliced.jpg",
                                        },
                                        {
                                            id: 1041009,
                                            name: "cheese",
                                            localizedName: "cheese",
                                            image: "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
                                        },
                                        {
                                            id: 20081,
                                            name: "all purpose flour",
                                            localizedName: "all purpose flour",
                                            image: "flour.png",
                                        },
                                        {
                                            id: 1077,
                                            name: "milk",
                                            localizedName: "milk",
                                            image: "milk.png",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404669,
                                            name: "sauce pan",
                                            localizedName: "sauce pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 3,
                                    step: "Combine sauce with veggies and transfer to a baking dish; top with extra cheese and breadcrumbs.",
                                    ingredients: [
                                        {
                                            id: 18079,
                                            name: "breadcrumbs",
                                            localizedName: "breadcrumbs",
                                            image: "breadcrumbs.jpg",
                                        },
                                        {
                                            id: 1041009,
                                            name: "cheese",
                                            localizedName: "cheese",
                                            image: "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
                                        },
                                        {
                                            id: 0,
                                            name: "sauce",
                                            localizedName: "sauce",
                                            image: "",
                                        },
                                    ],
                                    equipment: [
                                        {
                                            id: 404646,
                                            name: "baking pan",
                                            localizedName: "baking pan",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg",
                                        },
                                    ],
                                },
                                {
                                    number: 4,
                                    step: "Bake for 20 minutes or until browned on top.",
                                    ingredients: [],
                                    equipment: [
                                        {
                                            id: 404784,
                                            name: "oven",
                                            localizedName: "oven",
                                            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        },
                                    ],
                                    length: {
                                        number: 20,
                                        unit: "minutes",
                                    },
                                },
                            ],
                        },
                    ],
                    originalId: null,
                    spoonacularScore: 70.9236755371094,
                    spoonacularSourceUrl:
                        "https://spoonacular.com/cauliflower-and-broccoli-gratin-with-camembert-cheese-637290",
                },
            ],
        };

        if (debug) {
            data.recipes.forEach((recipe) => {
                recipe["healthStatus"] = getColorScheme(recipe.healthScore);
            });

            // console.log(data.recipes);

            setRecipes(data.recipes);
            setTrendingRecipes(getRandomElements(data.recipes, 4));
            setExploreRecipes(getRandomElements(data.recipes, 30));
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

    const stringCutter = (text, length) => {
        if (text.length > length) {
            return text.slice(0, length) + "...";
        }

        return text;
    };

    const getRandomElements = (array, numElements) => {
        if (array.length <= numElements) {
            return array;
        }

        return array
            .sort(() => Math.random() - 0.5) // Shuffle the array randomly
            .slice(0, numElements); // Get the first numElements items
    };

    // if (!recipe) return <p>Loading...</p>;

    return (
        <>
            <Navigator />

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
