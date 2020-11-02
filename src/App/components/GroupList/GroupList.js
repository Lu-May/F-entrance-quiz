import React, { Component } from 'react';
import './GroupList.css';

class GroupList extends Component {
  render() {
    return (
      // TODO GTB-3: - 加强实现并尝试使用更多语义化标签
      // TODO GTB-4: - 这里缩进有点问题
      <div className="group-list-container">
        <h1>分组列表</h1>
        <button type="submit">分组学员</button>
      </div>
    );
  }
}

export default GroupList;
