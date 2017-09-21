/**
 * Created by Wangke on 2017/9/21.
 */
import React, { PropTypes, Component } from 'react';

function Button(props, context) {
  return <button style={{ backgroundColor: context.color }}>{props.children}</button>;
}

Button.contextTypes = {
  color: PropTypes.string.isRequired,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

function Message(props) {
  return (
    <li>
      {props.text} <Button>Delete</Button>
    </li>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

class Messagelist2 extends Component {
  getChildContext() {
    return { color: '#40C4FF' };
  }

  render() {
    const messages = [
      { text: '2 text 1' },
      { text: '2 text 2' },
    ];
    const children = messages.map(message =>
      <Message key={message.text} text={message.text} />);
    return (
      <div>
        <p>context传递数据</p>
        <ul>
          {children}
        </ul>
      </div>
    );
  }
}

Messagelist2.childContextTypes = {
  color: PropTypes.string.isRequired,
};

export default Messagelist2;

// 在消息列表组件中，遍历生成消息组件，并向其传递props。然后通过getchildcontext() 方法将color放在context中，并声明了childContextTypes。
// 注意，如果不声明childContextTypes，将无法在组件中使用getChildContext()方法。

// 在消息组件中渲染按钮组件，不再直接传递color。

// 在按钮组件中，首先传递父组件的props和全局的context，然后渲染一个普通的按钮，并声明式地定义它的背景颜色为context.color。
// 注意，如果没有定义contextTypes，context将是一个空对象。
