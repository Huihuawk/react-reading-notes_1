/**
 * Created by Wangke on 2017/9/19.
 */

import React, { Component } from 'react';
import Counter from './Counter';

// export default function App() {
//   return <h1>hello world</h1>;
// }
export default class App extends Component {
// eslint-disable-line
  render() {
    // console.log('Source Map Testing');
    // throw new Error();
    return (
      <div>
        <h1>hello world</h1>
        <Counter />
      </div>
    );
  }
}
