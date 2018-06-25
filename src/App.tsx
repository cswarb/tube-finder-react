import * as React from "react";

class App extends React.Component {
  public render() {
    return (
      <div id="container">
            <div className="navigation">
                hello
            </div>

            <footer className="footer">
              <p className="footer__text">Made by: <a className="link-primary link-text" target="_BLANK" href="//chrismakesweb.co.uk/?ref=underground-status">chrismakesweb.co.uk</a></p>
              <p className="footer__text">Not affiliated or in any way officially connected to Transport For London (TFL)</p>
            </footer>
      </div>
    );
  }
}

export default App;
