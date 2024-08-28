import {
    faAppleWhole,
    faHamburger,
    faMartiniGlassCitrus,
    faPizzaSlice,
    faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./Logo";

function Footer() {
    return (
        <>
            <footer className="d-flex align-items-center justify-content-center">
                <Logo className="text-center py-5" />
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
