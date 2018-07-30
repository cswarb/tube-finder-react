import * as React from "react";

class Autocomplete extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render(): any {
        return (
            <div className="autocomplete">
                <header className="undergroundline__header">
                    <form action="">
                        <div className="searcharea__wrapper">

                            <form>
                                <div className="searcharea__input__wrapper">
                                    <input type="text"
                                    data-autocomplete="off"
                                    className="searcharea__input"
                                    name="search"
                                    placeholder={this.props.examplesearch}
                                    min="2"
                                    max="30"
                                    data-autofocus="autofocus"/>
                                    <span className="searcharea__input__clear"></span>
                                </div>
                            </form>

                            <div className="suggestion__wrapper">
                                <div className="suggestion__value">
                                    <button className="suggestion__select suggestion__select--disabled">
                                        <p className="suggestion__name">Station has no data. Try a different one.</p>
                                    </button>
                                </div>
                            </div>

                            <div className="suggestion__wrapper">
                                <div className="suggestion__value">
                                <button className="suggestion__select suggestion__select--test">
                                    <p className="suggestion__name">test</p>
                                    <p className="suggestion__helper suggestion__helper--test">test</p>
                                </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </header>
            </div>
        );
    }
}

export default Autocomplete;