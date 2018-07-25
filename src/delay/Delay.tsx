import * as React from "react";
import axios from "axios";
import * as AppConstants from "../app-constants";
import { TFLModeTypes } from "../line-list/ModeTypes";
import DelayModel from "./Delay.model";

class Delay extends React.Component<any, any> {
    public AppConstants: any;
    public errorOccured: boolean = false;
    public delayData: Array<DelayModel> = [];
    public modeTypes = new TFLModeTypes().modeTypes;

    constructor(props: any) {
        super(props);
        this.AppConstants = AppConstants;
        this.state = {
            delayData: []
        }
    }

    public componentDidMount() {
        this.getDelayData();
    }

    public getLineInfo(modeType: string): Promise<any> {
        const url = "apiBaseUrl";
        return axios.get(AppConstants.default[url] + `/Line/Mode/${modeType}/Disruption`);
    }

    public async getDelayData() {
        const result = await Promise.all(this.modeTypes.map(this.getLineInfo))
        .catch((err: any) => {
            console.log("something went wrong: ", err);
            this.errorOccured = true;
        });;

        this.setState({
            delayData: this.concatRes(result)
        });        
    }

    public concatRes(res: any): any {
        if (!res || !res.length) {
            return [];
        };

        const concatDelayData: any = [];
        res.forEach((theData: any, index: any) => {
            if (!theData.data.length) { return };
            theData.data.forEach((moreData: any) => {
                concatDelayData.push(
                    new DelayModel(moreData)
                );
            });
        });

        return concatDelayData;
    }

    public upperFirst(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    public formatCamelToReadable(str: string): string {
        return str.split(/(?=[A-Z])/).map(this.upperFirst).join(" ");
    }

    public render(): any {
        return (
            <div className="delays">
                {this.state.delayData.map((value: DelayModel, index: number) => {
                    return <div key={index} className="delays">
                        <div className="delay__wrapper">
                            <p>{this.formatCamelToReadable(value.category)} - {this.formatCamelToReadable(value.closureText)} - {value.description}</p>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

export default Delay;