import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
    return (
        <>
            <nav>
                <div className="container navigator d-flex align-items-center justify-content-between my-5">
                    {/* Logo */}
                    <div className="logo">
                        <p>Foodify</p>
                    </div>

                    {/* mobile - bars */}
                    <div className="fs-1">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </nav>

            <header>
                <div className="container"></div>
            </header>
        </>
    );
}

export default App;
