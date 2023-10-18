import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Mounting Phase
  componentDidMount() {
    console.log('Component did mount');
  }

  // Updating Phase
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // Error Handling Phase
  componentDidCatch(error, info) {
    console.log('Component did catch an error');
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  }
  reset =() => {
    this.setState((prevState) => ({count: 0}));
  }

  render() {
    console.log('Component is rendering');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.reset}> reset</button>
      </div>
    );
  }
}

export default LifecycleExample;
