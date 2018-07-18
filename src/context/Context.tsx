import * as React from "react";

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
                <button type="button" className="dataselection__filter button button__tab button__filter">Lines</button>
                <button type="button" className="dataselection__filter button button__tab button__filter">Stations</button >
            </section>
        );
    }
}

export default Context;