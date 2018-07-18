import * as React from "react";

import routes from "../AppRoutes";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render(): any {
        return (
            <div id="container">
                <Navigation></Navigation>

                <div>{routes}</div>

                <Footer></Footer>
            </div>
        );
    }
}

export default App;