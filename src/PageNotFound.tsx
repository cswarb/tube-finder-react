import * as React from "react";

class PageNotFound extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        console.log("Page not found");
        
    }

    public render() {
        return (
            <div>
             <p>Page not found</p>
            </div>
        );
    }
}

export default PageNotFound;