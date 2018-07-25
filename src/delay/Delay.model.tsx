class DelayModel {
    public $type: string;
    public affectedRoutes: Array<any>;
    public affectedStops: Array<any>;
    public category: string;
    public categoryDescription: string;
    public closureText: string;
    public description: string;
    public type: string;

    constructor(delta: Partial<DelayModel>) {
        Object.assign(this, delta);
    }
}

export default DelayModel;