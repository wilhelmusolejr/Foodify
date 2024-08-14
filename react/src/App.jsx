import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faStar,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faSmile, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// asset
import pizzaBanner from "./assets/pizza.png";
import shareBanner from "./assets/share_banner.jpg";

import fried from "./assets/RandomFood/fried.jpg";
import soup from "./assets/RandomFood/soup.jpg";
import pasta from "./assets/RandomFood/pasta.jpg";
import steak from "./assets/RandomFood/steak.jpg";
import chopseuy from "./assets/RandomFood/chopseuy.jpg";

function App() {
    let base_url = `https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa&apiKey=YOUR-API-KEY.`;

    return (
        <>
            <nav>
                <div className="container-fluid navigator d-flex align-items-center justify-content-between my-3">
                    {/* Logo */}
                    <div className="logo">
                        <p>Foodify.</p>
                    </div>

                    <div className="nav-link d-none">
                        <ul className="navbar-nav d-flex flex-row gap-3">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Recipe
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-md-flex align-items-center gap-4 mobile d-none">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faBookmark} />
                        <div className="ms-3 d-none">
                            <button className="btn btn-primary">sign in</button>
                        </div>
                    </div>

                    {/* mobile - bars */}
                    <div className="bar fs-1">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </nav>

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
                            <button className="btn btn-primary mt-5">
                                View recipes
                            </button>
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

                    <div className="card-parent recipe-parent d-flex gap-5">
                        {/* card */}
                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-3">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-2">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-2">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-2">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="share-recipe my-5 py-5 position-relative">
                <div className="container-fluid d-lg-flex align-items-center justify-content-center gap-5">
                    {/* 1 */}
                    <div className="share-parent">
                        <img src={shareBanner} alt="" />
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

                        <button className="btn btn-primary mt-5">
                            Share now !
                        </button>
                    </div>
                </div>
            </section>

            <section className="explore-recipe my-5 py-5">
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
                    <div className="card-parent recipe-category d-flex justify-content-center gap-5 mt-5">
                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={fried}
                                    alt=""
                                    className="rounded-circle"
                                />
                            </div>
                            <h3 className="mt-2">All</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={soup}
                                    alt=""
                                    className="rounded-circle"
                                />
                            </div>
                            <h3 className="mt-2">Soup</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={pasta}
                                    alt=""
                                    className="rounded-circle"
                                />
                            </div>
                            <h3 className="mt-2">Pasta</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={chopseuy}
                                    alt=""
                                    className="rounded-circle"
                                />
                            </div>
                            <h3 className="mt-2">Chopseuy</h3>
                        </div>
                    </div>

                    <div className="card-parent recipe-parent d-flex gap-5 mt-3">
                        {/* card */}
                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-3">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-2">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-2">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow">
                            <img
                                className="card-img-top"
                                src={pasta}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">Basta Pasta</h5>
                                    <div className="rate">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="card-text mt-2">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-recipe my-5 py-5">
                <div className="container-fluid">
                    <h2 className="text-capitalize mb-5">Popular Categories</h2>

                    {/* card parent */}
                    <div className="card-parent recipe-category d-flex justify-content-center gap-5">
                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={fried}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">All</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={soup}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">Soup</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={pasta}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">Pasta</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={chopseuy}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">Chopseuy</h3>
                        </div>
                    </div>

                    {/* card parent */}
                    <div className="card-parent recipe-category d-flex justify-content-center gap-5 mt-3">
                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={fried}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">All</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={soup}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">Soup</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={pasta}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">Pasta</h3>
                        </div>

                        {/* card */}
                        <div className="card text-center">
                            <div className="img-parent">
                                <img
                                    src={chopseuy}
                                    alt=""
                                    className="rounded-circle shadow"
                                />
                            </div>
                            <h3 className="mt-2">Chopseuy</h3>
                        </div>
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

            <footer className="d-flex align-items-center justify-content-center">
                <div className="logo text-center py-5">
                    <p>Foodify.</p>
                </div>
            </footer>
        </>
    );
}

export default App;
