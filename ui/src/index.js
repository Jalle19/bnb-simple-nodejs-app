const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serverInfo: '...'
    }
  }

  async componentDidMount() {
    const response = await fetch('http://api.example.com/serverInfo');

    this.setState({
      serverInfo: await response.text()
    })
  }

  render() {
    return [
      React.createElement('h1', null, `Beer Banter simple NodeJS app, second version`),
      React.createElement('p', null, `Below we will display some information from the API:`),
      React.createElement('i', null, this.state.serverInfo)
    ];
  }
}

ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById('root')
);
