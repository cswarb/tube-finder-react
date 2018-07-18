import * as React from "react";
import axios from "axios";
import * as AppConstants from "../app-constants";
import Line from "../line/Line";

class LineList extends React.Component<any, any> {
    public lineData: any = [];
    public hello: any = [];

    constructor(props: any) {
        super(props);
        this.state = {
            lineData: []
        }
    }

    public componentDidMount() {
        this.getAllLineData();
    }

    public getTube(type: string): Promise<any> {
        const url = "apiBaseUrl";
        return axios.get(AppConstants.default[url] + `Line/Mode/${type}/Status`);
    }

    public async getAllLineData() {
        const promises = [this.getTube("tube"), this.getTube("overground"), this.getTube("dlr")];

        const result = await Promise.all(promises)
        .catch((err: any) => {
            console.log("something went wrong: ", err);
        });
        
        this.setState({
            lineData: this.concatRes(result)
        }); 
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

        // let arr = [];
        // lineArray.map((value, iterator) => {
        //     arr = arr.concat(value);
        // });
        // return arr;
    }

    public render() {
        return (
            <div>
                {this.state.lineData.map((listValue: any, index: number) => {
                    return <Line key={index.toString()} status={listValue.lineStatuses} lineid={listValue.id} linename={listValue.name} modename={listValue.modeName}></Line>;
                })}
            </div>
        );
    }
}

export default LineList;