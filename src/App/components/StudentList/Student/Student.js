import React, { Component } from 'react';
import './Student.css';

// TODO GTB-4: - 单纯无状态的UI组件可以写成函数式组件
class Student extends Component {
  render() {
    return (
      <span className="student">
        {this.props.studentId}.{this.props.studentName}
      </span>
    );
  }
}

export default Student;
