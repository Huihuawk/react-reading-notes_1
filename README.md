# React 与 Redux 开发实例精解实例学习

## Component

### Counter.js

- 使用Counter组件更新state.value，然后将更新的state.value通过props传递到Countent组件，最后Countent组件在每次更新时都渲染出新接收的props.value

### Messagelist1.js

- 使用props传递数据。
- 在消息列表组件中遍历生成消息组件，并向其传递了key,text,color等props。
- 因为消息组件没有子元素，所以应该写成自闭合的形式。
- 在消息组件中，渲染按钮组件，并向其传递了color。
- 在按钮组件中，渲染了一个普通按钮，并声明式地定义了他的背景颜色为上级组件传来的color。
