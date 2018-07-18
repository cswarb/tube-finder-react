import * as React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render() {
        return (
            <header className="navigation">
                <nav className="navigation__bar">
                    <div className="navigation__bar__logo">
                        <img className="logo__header logo__medium" src="./assets/img/underground-white.svg" alt="Underground Logo" />
                        <h1 className="navigation__bar__item"><a className="navigation__bar__item--link navigation__bar__text" href="./">Transport for London <span>Service Checker</span></a></h1>
                    </div>
                    <div className="navigation__bar__items">
                        <ul className="navigation__bar__container">
                            <li className="navigation__bar__item">
                                <Link to="/" className="navigation__bar__item--link">
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navigation;