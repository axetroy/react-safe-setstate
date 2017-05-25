# safe-set-state

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/react-safe-setstate.svg)](https://greenkeeper.io/)

react component decorator for make sure this.setState() run at safe env. registry setState method with an empty function before unmount.

## Install

```bash
yarn add @axetroy/react-safe-set-state
```

## Usage

```jsx harmony
import React, { Component } from 'react';
import { render } from 'react-dom';
import safeSetState from '@axetroy/react-safe-set-state';

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

```
    
## Run the Demo

```bash
git clone https://github.com/axetroy/react-safe-set-state.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-safe-set-state/blob/master/LICENSE)