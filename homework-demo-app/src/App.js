import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isTemplateElement } from '@babel/types';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';

// 两种定义方式，方法名与文件名一致

/*传统类方式
class App extends Component{

  render(){
    const todoList = [
      "react practice",
      "game time"
    ]
    return (
      <div className="App">

      <h2>Todo List</h2>
      {
        todoList.map(item => <p>{item}</p>)
      }      
      </div>
    );
  }
}*/

/*函数方式、简化
function App() {
  const todoList = [
    "react practice",
    "game time"
  ]
  //JSX代码
  return (
    <div className="App">
    <h2>Todo List</h2>
    {
      todoList.map(item => <p>{item}</p>)
    }      
    </div>
  );
}*/

class App extends Component{

  render(){
    
    return (
      <div className="App">

      <TodoListHeader />
      <TodoList />   
      </div>
    );
  }
}

// export出来
export default App;
