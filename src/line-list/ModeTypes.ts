export type TFLModeTypesType = "tube" | "overground" | "dlr";

export class TFLModeTypes {
    private allModeTypes: any = [
        "tube",
        "overground",
        "dlr"
    ];

    constructor() {
        
    }

    public get modeTypes(): any {
        return this.allModeTypes;
    }
}