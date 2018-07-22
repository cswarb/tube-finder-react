import * as React from "react";

class ErrorMsg extends React.Component<any, any> {
    public defaultMessage: string = "An error occured!";

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public getMessage(): string {
        return this.props.message || this.defaultMessage;
    }

    public render() {
        return (
            <p className="undergroundline__content">{this.getMessage()}</p>
        );
    }
}

export default ErrorMsg;