import * as React from "react";

class Footer extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        
    }

    public render(): any {
        return (
            <footer className="footer">
                <p className="footer__text">Made by: <a className="link-primary link-text" target="_BLANK" href="//chrisswarbrick.co.uk?ref=underground-status">chrisswarbrick.co.uk</a></p>
                <p className="footer__text">Not affiliated or in any way officially connected to Transport For London (TFL)</p>
            </footer>
        );
    }
}

export default Footer;