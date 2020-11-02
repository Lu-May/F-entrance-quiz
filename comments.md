### 完成度：

- 样式还原度较高，但没有分组列表，且添加学员 input 我输入一个字母就触发一次 list 请求
- 实现添加学员，学员列表功能

**Details:**

### 测试：

- 没有测试

**Details:**

### 知识点：

- 有做组件拆分，拆分了分组列表与学员列表与学员 item，可以进一步进行组件的复用
- 有使用语义化标签，还可以加强使用
- 有用到 flex 布局，但没有使用 scss
- 运用了 ES6+语法及 fetch
- 运用 React 相关知识点

**Details:**

- \- 这里不应该调用 componentDidMount，componentDidMount 不是用来显式调用的，且这里输入一个字母就会调用一次请求
- \- onKeyDown 这里可以直接写{this.onKeyDownchange}，onKeyDownchange 定义成箭头函数
- \- 加强实现并尝试使用更多语义化标签

### 工程实践：

- 小步提交做的不错
- 没有抽出 Api 请求层
- 加强组件的复用
- 存在输入时大量请求的调用
- eslint 存在一个 error，需要 fix

**Details:**

- \- 单纯无状态的 UI 组件可以写成函数式组件
- \- 可以抽取 API 请求层，解耦请求与渲染
- \- 使用 name 为 key 的话可能出现重复的 key 值
- \- 这里缩进有点问题
