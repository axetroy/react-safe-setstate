import React, { Component } from 'react';
import { render } from 'react-dom';
import safeSetState from '../../lib/safe-set-state';

@safeSetState()
class Test extends Component {
  state = {
    id: Math.random()
  };
  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ id: Math.random() });
    }, 2000);
    console.log('unmount');
  }
  render() {
    return (
      <div>
        This is a test component., id: {this.state.id}
      </div>
    );
  }
}

class App extends Component {
  state = {
    show: true
  };

  render() {
    return (
      <div>
        <p>
          Click the button the toggle the test component
        </p>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? 'Unmount' : 'mount'}
        </button>
        {this.state.show
          ? <Test />
          : <p>
              Test Component have unmount, check the call back
            </p>}
      </div>
    );
  }
}

const element = document.createElement('div');
document.body.appendChild(element);
render(<App />, element);
