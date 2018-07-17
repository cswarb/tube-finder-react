import * as React from "react";
import axios from "axios";
import * as AppConstants from "./app-constants";
import Line from "./Line";

class LineList extends React.Component<any, any> {
    public lineData: any = [];
    public hello: any = [];

    constructor(props: any) {
        super(props);
        this.state = {
            hello: {},
            lineData: [],
            lineDataTest: []
        }
    }

    public componentDidMount() {
        this.getAllLineData();
    }

    public getTube(type: string): Promise<any> {
        const url = "apiBaseUrl";
        return axios.get(AppConstants.default[url] + `Line/Mode/${type}/Status`);
    }

    public getAllLineData() {
        const promises = [this.getTube("tube"), this.getTube("overground"), this.getTube("dlr")];

        Promise.all(promises).then((res: any) => {
            this.concatResults(res);
        }).catch((err: any) => {
            console.log("something went wrong: ", err);
        });
    }

    public concatResults(res: any) {
        if (!res) {
            return;
        };

        const g: any = [];
        res.forEach((theData: any, index: any) => {
            theData.data.forEach((moreData: any) => {
                g.push(moreData)
            });
        });

        this.setState({
            lineDataTest: g
        });
        console.log(g);
        
    }

    public render() {
        return (
            <div>
                {this.state.lineDataTest.map((listValue: any, index: number) => {
                    return <Line key={index.toString()} status={listValue.lineStatuses} lineid={listValue.id} linename={listValue.name} modename={listValue.modeName}></Line>;
                })};
            </div>
        );
    }
}

export default LineList;