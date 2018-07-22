import * as React from "react";
import axios from "axios";
import * as AppConstants from "../app-constants";
import Line from "../line/Line";
import ErrorMsg from "../error/Error";
import { TFLModeTypesType, TFLModeTypes } from "./ModeTypes";

class LineList extends React.Component<any, any> {
    public lineData: any = [];
    public modeTypes: any = new TFLModeTypes().modeTypes;
    public AppConstants: any = {};
    public errorOccured: boolean = false;

    constructor(props: any) {
        super(props);
        this.AppConstants = AppConstants;
        this.state = {
            lineData: []
        }
    }

    public componentDidMount() {
        this.getAllLineData();
    }

    public async getAllLineData() {
        const result = await Promise.all(this.modeTypes.map(this.getLineInfo))
        .catch((err: any) => {
            console.log("something went wrong: ", err);
            this.errorOccured = true;
        });

        this.setState({
            lineData: this.concatRes(result)
        }); 
    }

    public getLineInfo(modeType: string): Promise<any> {
        const url = "apiBaseUrl";
        return axios.get(AppConstants.default[url] + `Line/Mode/${modeType}/Status`);
    }

    public concatRes(res: any) {
        if (!res || !res.length) {
            return [];
        };

        const concatLineData: any = [];
        res.forEach((theData: any, index: any) => {
            theData.data.forEach((moreData: any) => {
                concatLineData.push(moreData)
            });
        });

        return concatLineData;
    }

    public render() {
        return (
            <div>
                { this.errorOccured && <ErrorMsg message="Failed to get line data."></ErrorMsg> }

                { this.state.lineData.map((listValue: any, index: number) => {
                    return <Line key={index.toString()} status={listValue.lineStatuses} lineid={listValue.id} linename={listValue.name} modename={listValue.modeName}></Line>;
                }) }
            </div>
        );
    }
}

export default LineList;