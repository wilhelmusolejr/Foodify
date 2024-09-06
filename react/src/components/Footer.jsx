import {
    faAppleWhole,
    faHamburger,
    faMartiniGlassCitrus,
    faPizzaSlice,
    faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./Logo";

const GITHUB_URL = import.meta.env.VITE_GITHUB;
const PORTFOLIO_URL = import.meta.env.VITE_PORTFOLIO;
const PROJECT_INFORMATION_URL = import.meta.env.VITE_PROJECT_INFORMATION;

function Footer() {
    return (
        <>
            <footer className="d-flex align-items-center justify-content-center gap-5 flex-wrap">
                <Logo className="text-center py-5" />
                <div className="d-flex gap-3 flex-column flex-md-row justify-content-center align-items-center">
                    <a href={PORTFOLIO_URL} className="text-decoration-none">
                        Portfolio
                    </a>
                    <a
                        href={PROJECT_INFORMATION_URL}
                        className="text-decoration-none"
                    >
                        Project Information
                    </a>
                    <a href={GITHUB_URL} className="text-decoration-none">
                        GitHub
                    </a>
                </div>

                <div className="left d-flex gap-5">
                    <FontAwesomeIcon icon={faPizzaSlice} />
                    <FontAwesomeIcon icon={faMartiniGlassCitrus} />
                </div>
                <div className="right">
                    <FontAwesomeIcon icon={faAppleWhole} />
                    <FontAwesomeIcon icon={faHamburger} />
                    <FontAwesomeIcon icon={faSeedling} />
                </div>
            </footer>
        </>
    );
}

export default Footer;
