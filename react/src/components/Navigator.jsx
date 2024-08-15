import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Logo from "./Logo";

import { Link } from "react-router-dom";

function Navigator() {
    return (
        <>
            <nav>
                <div className="container-fluid navigator d-flex align-items-center justify-content-between my-3">
                    {/* Logo */}
                    <Logo />

                    <div className="nav-link d-none">
                        <ul className="navbar-nav d-flex flex-row gap-3">
                            <li className="nav-item active">
                                <Link to={"/"} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"#"} className="nav-link">
                                    Recipe
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"#"} className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"#"} className="nav-link">
                                    Contact
                                </Link>
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
        </>
    );
}

export default Navigator;
