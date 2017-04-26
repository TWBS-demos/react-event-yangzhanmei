import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }

    addEvent() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span><input type="button" value="+" onClick={this.addEvent.bind(this)}/>
            </div>
        );
    }
}

export default App;
