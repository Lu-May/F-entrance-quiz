import React, { Component } from 'react';
import './App.scss';
import GroupList from './components/GroupList/GroupList';
import StudentList from './components/StudentList/StudentList';

// TODO GTB-1: * 样式还原度较高，但没有分组列表，且添加学员input我输入一个字母就触发一次list请求
// TODO GTB-1: * 实现添加学员，学员列表功能
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有做组件拆分，拆分了分组列表与学员列表与学员item，可以进一步进行组件的复用
// TODO GTB-3: * 有使用语义化标签，还可以加强使用
// TODO GTB-3: * 有用到flex布局，但没有使用scss
// TODO GTB-3: * 运用了ES6+语法及fetch
// TODO GTB-3: * 运用React相关知识点
// TODO GTB-4: * 小步提交做的不错
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 加强组件的复用
// TODO GTB-4: * 存在输入时大量请求的调用
// TODO GTB-4: * eslint存在一个error，需要fix
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
