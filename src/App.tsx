import * as React from "react";

import routes from "./AppRoutes";
import { Link } from "react-router-dom";

class App extends React.Component {
    public name: string = "Test";

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render() {
        return (
            <div id="container">
                <Link to="/line-list" className="navigation">
                    {this.name}
                </Link>
                
                <Link to="/line-search" className="navigation">
                    {this.name}
                </Link>

                
                <div>
                    {routes}
                </div>

               

                <footer className="footer">
                    <p className="footer__text">Made by: <a className="link-primary link-text" target="_BLANK" href="//chrismakesweb.co.uk/?ref=underground-status">chrismakesweb.co.uk</a></p>
                    <p className="footer__text">Not affiliated or in any way officially connected to Transport For London (TFL)</p>
                </footer>
            </div>
        );
    }
}

export default App;