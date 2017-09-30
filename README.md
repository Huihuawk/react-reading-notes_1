# React 与 Redux 开发实例精解实例学习

## Component

### Counter.js

- 使用Counter组件更新state.value，然后将更新的state.value通过props传递到Countent组件，最后Countent组件在每次更新时都渲染出新接收的props.value

### Messagelist1.js

- 使用props传递数据。

- 在消息列表组件中遍历生成消息组件，并向其传递了key,text,color等props。
因为消息组件没有子元素，所以应该写成自闭合的形式。

- 在消息组件中，渲染按钮组件，并向其传递了color。

- 在按钮组件中，渲染了一个普通按钮，并声明式地定义了他的背景颜色为上级组件传来的color。

### Messagelist2.js

- 使用context传递数据。

- 在消息列表组件中，遍历生成消息组件，并向其传递props。然后通过getchildcontext() 方法将color放在context中，并声明了childContextTypes。
注意，如果不声明childContextTypes，将无法在组件中使用getChildContext()方法。

- 在消息组件中渲染按钮组件，不再直接传递color。

- 在按钮组件中，首先传递父组件的props和全局的context，然后渲染一个普通的按钮，并声明式地定义它的背景颜色为context.color。
注意，如果没有定义contextTypes，context将是一个空对象。


## Section

### Section 7

**this**绑定4种规则优先顺序施于调用点：
> 默认绑定、隐式绑定、显式绑定和new绑定，
分别对应函数的四种调用方式：独立调用、方法调用、间接调用和构造函数调用。
- 被new调用，使用新构建的对象

- 被call或者apply调用，使用指定的对象

- 被持有调用的环境对象调用，使用那个环境对象

- 默认：strict mode 下undefined，否则为全局变量

> this不是编写时绑定，而是运行时绑定，
他依赖于函数调用的上下文条件。
this绑定和函数声明的位置无关，反而和函数被调用的方式有关。
React组件也遵循JaveScript这种特性
