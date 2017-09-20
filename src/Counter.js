/**
 * Created by Wangke on 2017/9/20.
 */

import React, { Component, PropTypes } from 'react';

function Countent(props) {
  return <p>Countent组件的props.value：{props.value}</p>;
}

Countent.propTypes = {
  value: PropTypes.number.isRequired,
};

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          INCREMENT
        </button>
        <div>
          Counter 组件内部状态：
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <Countent value={this.state.value} />
        </div>
      </div>
    );
  }
}

// 使用Counter组件更新state.value，然后将更新的state.value通过props传递到Countent组件，
// 最后Countent组件在每次更新时都渲染出新接收的props.value
