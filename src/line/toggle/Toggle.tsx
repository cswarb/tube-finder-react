import * as React from "react";

class Toggle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    public componentDidMount() {
        
    }

    public toggleOpen(): any {
        this.props.toggleOpen();
    }

    public renderFullOrPlaceholder() {
        if (this.props.hasDisruption) {
            return <div className="undergroundline__line__toggle">
                <button onClick={ this.toggleOpen } type="button" data-alt="toggle switch" className="button button__icon" data-format="svg" role="button">
                    <p className="button__icon__text">More Detail</p>
                    <img src="/assets/img/toggle.svg" className="button undergroundline__line__toggleicon icon" alt="toggle switch" />
                    <img src="/assets/img/loading.svg" alt="loading" className="undergroundline__line__loadingicon" />
                </button>
            </div>
        } else {
            return <div className="undergroundline__line__toggle"></div>
        }; 
    }

    public render() {
        return (
            <>
                { this.renderFullOrPlaceholder() }
            </>
        );
    }
}

export default Toggle;