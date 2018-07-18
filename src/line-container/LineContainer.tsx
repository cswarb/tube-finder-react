import * as React from "react";

import routes from "../AppRoutes";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Context from "../context/Context";
import LineList from "../line-list/LineList";

class LineContainer extends React.Component {
    public listType: string = "Lines";

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render(): any {
        return (
            <article>
                <Context></Context>

                {/* <div emergency-delays></div> */}

                <section className="undergroundline">
                    <div className="undergroundline__lines">
                        <h2 className="undergroundline__title">All { this.listType }:</h2>
                        <LineList></LineList>
                    </div>
                </section>
            </article>
        );
    }
}

export default LineContainer;