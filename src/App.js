/**
 * Created by Wangke on 2017/9/19.
 */

import React, { Component } from 'react';
import Counter from './Counter';
import Messagelist1 from './Messagelist1';
import Messagelist2 from './Messagelist2';

// export default function App() {
//   return <h1>hello world</h1>;
// }
const suffix = '被调用，this指向：';
export default class App extends Component {
// eslint-disable-line
  handler() {
    console.log(`handler${suffix}`, this);
  }
  render() {
    console.log(`render${suffix}`, this);
    // throw new Error();
    return (
      <div>
        <button onClick={this.handler}>hello world</button>
        <Counter />
        <Messagelist1 />
        <Messagelist2 />
      </div>
    );
  }
}
