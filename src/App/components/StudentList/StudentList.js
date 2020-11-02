import React, { Component } from 'react';
import './StudentList.css';
import Student from './Student/Student';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList = () => {
    // TODO GTB-4: - 可以抽取API请求层，解耦请求与渲染
    fetch('http://localhost:8080/student/list', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ studentList: data });
      });
  };

  onKeyDownchange(e) {
    const inputValue = e.target.value;
    if (e.keyCode === 13) {
      fetch('http://localhost:8080/student/add', {
        method: 'POST',
        body: inputValue,
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ studentList: data });
        });
      e.target.value = '';
    }
    // TODO GTB-3: - 这里不应该调用componentDidMount，componentDidMount不是用来显式调用的，且这里输入一个字母就会调用一次请求
    this.componentDidMount();
  }

  render() {
    return (
      <div className="student-list-container">
        <h1>学员列表</h1>
        <section className="student-list">
          {this.state.studentList.map((item) => (
            <Student
              studentId={this.state.studentList.indexOf(item) + 1}
              studentName={item.studentName}
              // TODO GTB-4: - 使用name为key的话可能出现重复的key值
              key={item.studentName}
            />
          ))}
          {/* TODO GTB-3: - onKeyDown这里可以直接写{this.onKeyDownchange}，onKeyDownchange定义成箭头函数 */}
          <input type="text" placeholder="+ 添加学员" onKeyDown={(e) => this.onKeyDownchange(e)} />
        </section>
      </div>
    );
  }
}

export default StudentList;
