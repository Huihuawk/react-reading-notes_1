/**
 * Created by Wangke on 2017/9/21.
 */

import React, { PropTypes } from 'react';

function Button(props) {
  return <button style={{ backgroundColor: props.color }}>{props.children}</button>;
}

Button.PropTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

function Message(props) {
  return (
    <li>
      {props.text} <Button color={props.color}>Delete</Button>
    </li>
  );
}

Message.PropTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function MessageList() {
  const color = 'gray';
  const messages = [
    { text: 'Text one' },
    { text: 'Text two' },
  ];
  // const children = [];
  // messages.map((message) => {
  //  children.push(
  //    <Message key={message.text} color={color} text={message.text} />,
  //  );
  //  return message;
  // });
  const children = messages.map(message =>
    <Message key={message.text} color={color} text={message.text} />);
  return (
    <div>
      <p>通过props将color逐层传给里面的Button组件</p>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default MessageList;

// 使用props传递数据。
// 在消息列表组件中遍历生成消息组件，并向其传递了key,text,color等props。
// 因为消息组件没有子元素，所以应该写成自闭合的形式。
// 在消息组件中，渲染按钮组件，并向其传递了color。
// 在按钮组件中，渲染了一个普通按钮，
// 并声明式地定义了他的背景颜色为上级组件传来的color。
