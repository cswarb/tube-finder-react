import * as React from "react";
import { NavLink } from "react-router-dom";

class Context extends React.Component {
    public name: string = "Test";

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render() {
        return (
            <section className="dataselection">
                <NavLink className="dataselection__filter button button__tab button__filter" to='/line-list' activeClassName="button__filter--selected">Lines</NavLink>
                <NavLink className="dataselection__filter button button__tab button__filter" to='/line-search' activeClassName="button__filter--selected">Stations</NavLink>
            </section>
        );
    }
}

export default Context;