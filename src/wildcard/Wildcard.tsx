import * as React from "react";
import { Link } from "react-router-dom";

class Wildcard extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render() {
        return (
            <div className="result__wrapper">
                <h1>Oops, nothing found. Try going back <Link to="/" className="dark">home.</Link></h1>
            </div>
        );
    }
}

export default Wildcard;