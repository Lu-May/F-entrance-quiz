import React, { Component } from 'react';
import './Student.css';

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