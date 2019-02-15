import React from 'react';
import ReactDOM from 'react-dom';
import { LocalYoutube } from './components/localYoutube';

// import { PicsApp } from './components/pics';


class App extends React.Component {

    render() {
        return (
            <div>
                {/* <PicsApp /> */}
                <LocalYoutube />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') // binds this component to html root div
)