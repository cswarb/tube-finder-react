import * as React from "react";
import * as AppConstants from "./app-constants";

class Line extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            opened: false
        }
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    public componentDidMount() {

    }

    public toggleOpen() {
        this.setState({
            opened: this.state.opened ? true : false
        });
    }

    public getSanitizedLine(line: any): string {
        if (line.modeName === "tube") {
            return line.id.replace(/-/g, "");
        } else {
            return line.modeName;
        };
    }

    public render() {
        console.log(this.props);
        
        return (
            <article className={`undergroundline__line undergroundline__line--${this.getSanitizedLine(this.props.modename)}`}>
                <div className="undergroundline__block">
                    <h1 className="undergroundline__line__name">{this.props.linename}</h1>
                    <div className="undergroundline__line__status">
                        <p className="undergroundline__line__status__text">
                            <span>Desc - {`${this.state.opened}`}</span>
                            <br />
                        </p>
                    </div>
                        <div className="undergroundline__line__toggle">
                            <button onClick={this.toggleOpen} type="button" data-alt="toggle switch" className="button button__icon" data-format="svg" role="button">
                            <p className="button__icon__text">More Detail</p>
                            <img src="./assets/img/toggle.svg" className="button undergroundline__line__toggleicon icon" alt="toggle switch"/>
                            <img src="/assets/img/loading.svg" alt="loading" className="undergroundline__line__loadingicon"/>
                        </button>
                    </div >
                </div>
                    <div className="undergroundline__block undergroundline__block__more-info">
                    <p className="undergroundline__block__content">
                        
                    </p>
                </div>
            </article>
            
        );
    }
}

export default Line;