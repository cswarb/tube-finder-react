import * as React from "react";
import * as AppConstants from "../app-constants";
import Toggle from "./toggle/Toggle";

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

    public hasAdditionalDataToShow(): any {
        const hasDisruption = this.props.status.some((lineStatus: any) => {
            return lineStatus.hasOwnProperty("disruption") && lineStatus.disruption;
        });
        return hasDisruption;
    }

    public isFuture(validaityPeriodArr: any): boolean {
        return validaityPeriodArr.some((validityPeriod: any) => {
            return validityPeriod.isNow;
        });        
    }

    public toggleOpen() {
        this.setState({
            opened: this.state.opened ? false : true
        });
    }

    public getSanitizedLine(line: any): string {
        // Return the santized tube line. Anything other than a tube should return the mode
        if (this.isTube(line.modename)) {
            return line.lineid.replace(/-/g, "");
        } else {
            return line.modename;
        };
    }

    public isTube(modeType: string): boolean {
        return modeType === "tube";
    }

    public render() {
        return (
            <article className={`undergroundline__line undergroundline__line--${this.getSanitizedLine(this.props)} ${this.props.lineid ? "undergroundline__line--loaded" : ""}`}>
                <div className="undergroundline__block">
                    <h1 className="undergroundline__line__name">{this.props.linename}</h1>
                    <div className="undergroundline__line__status">
                        {this.props.status.map((value: any, index: number) => {
                            return <p className="undergroundline__line__status__text" key={index}>{this.isFuture(value.validityPeriods) ? "Upcoming - " : ""} {value.statusSeverityDescription}</p>;
                        })}
                    </div>
                    <Toggle toggleOpen={this.toggleOpen} hasDisruption={this.hasAdditionalDataToShow()}></Toggle>
                </div>
                <div className={`undergroundline__block undergroundline__block__more-info ${this.state.opened ? 'undergroundline__block--expanded' : ''}`}>
                    {this.props.status.map((value: any, index: number) => {
                        return <p className="undergroundline__block__content" key={index}>{value.reason}</p>
                    })}
                </div>
            </article>
        );
    }
}

export default Line;