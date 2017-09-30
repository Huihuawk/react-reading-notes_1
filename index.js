/**
 * Created by Wangke on 2017/9/19.
 */
import React from 'react';
import { render } from 'react-dom';
import App from './src/App';

const componentInstance = render((<App />), document.querySelector('#root'));

console.log('组件、ReactElement、组件实例');
console.log(App);
console.log(<App />);
console.log(componentInstance);
