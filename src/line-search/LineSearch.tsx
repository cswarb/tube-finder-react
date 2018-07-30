import * as React from "react";

import Context from "../context/Context";
import Autocomplete from "../autocomplete/Autocomplete";
import * as AppConstants from "../app-constants";
import axios from "axios";

class LineSearch extends React.Component {
    public listType: string = "Lines";
    public searchExample: string = "e.g. Picadilly";
    public autocompleteData: Array<any> = [];

    constructor(props: any) {
        super(props);
        this.state = {
            autocompleteData: []
        };
    }

    public componentDidMount() {
        this.getAllPossibleTubeLines().then((lines: any) => {
            if(!lines.data || lines.data.length < 1) {
                return Promise.reject("No line data to evaluate");
            };
            
            const allLineIds = lines.data.reduce((acca: Array<string>, currentVal: any) => {
                acca.push(currentVal.id);
                return acca;
            }, []);

            if (!allLineIds.length) {
                return Promise.reject("No line IDs to get");
            };

            return Promise.all(
                allLineIds.map(
                    this.getLineStopPoints
                )
            );
        }).then((lineStopPoints: any) => {
            this.getAutocompleteData(lineStopPoints.map((res: any) => res.data));
        }).catch((err: any) => {
            console.error(err);
        });
    }

    public getAllPossibleTubeLines(modeType: string = "tube"): Promise<any> {
        const url = "apiBaseUrl";
        return axios.get(AppConstants.default[url] + `/Line/Mode/${modeType}`);
    }

    public getLineStopPoints(lineId: string): Promise<any> {
        const url = "apiBaseUrl";
        return axios.get(AppConstants.default[url] + `/Line/${lineId}/StopPoints`);
    }
    
    public getAutocompleteData(results: any): any {
        this.setState({
            autocompleteData: this.dedupeSimilar(results)
        });
    }

    public dedupeSimilar(results: any): Array<any> {
        console.log(results);
        return results || [];
    }

    public render(): any {
        return (
            <article>
                <Context></Context>

                <section className="undergroundline">
                    <Autocomplete examplesearch={this.searchExample} dataset={this.autocompleteData}></Autocomplete>
                    {/* <div search-results (clearSearchResults)="clearTheSearchResult($event)" [searchResults]="searchResults"></div> */}
                </section>
            </article>
        );
    }
}

export default LineSearch;