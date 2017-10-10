/**
 * Created by Wangke on 2017/9/19.
 */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Counter from './Counter';
import Messagelist1 from './Messagelist1';
import Messagelist2 from './Messagelist2';

// export default function App() {
//   return <h1>hello world</h1>;
// }
const suffix = '被调用，this指向：';
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.handler = this.handle.bind(this);
  }
// eslint-disable-line

  componentDidMount() {
    console.log(`componentDidMount${suffix}`, this);
  }

  componentWillReceiveProps() {
    console.log(`componentWillReceiveProps${suffix}`, this);
  }

  shouldComponentUpdate() {
    console.log(`shouldComponentUpdate${suffix}`, this);
    return true;
  }

  componentDidUpdate() {
    console.log(`componentDidUpdata${suffix}`, this);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount${suffix}`, this);
  }

  handler() {
    console.log(`handler${suffix}`, this);
  }
  render() {
    console.log(`render${suffix}`, this);
    this.handler();
    window.handler = this.handler;
    window.handler();

    return (
      <div>
        <Counter />
        <Messagelist1 />
        <Messagelist2 />
        <div>
          <button onClick={this.handler}>hello world</button>
          <p>About this</p>
        </div>
      </div>
    );
  }
}
