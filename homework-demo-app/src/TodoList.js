import React, {Component} from 'react';
import NewItem from './NewItem';
import ListItem from './ListItem';
import './TodoList.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todoList:[
                {content: "react practice", done: false},
                {content: "game time", done: false}
              ]
        }
    }

    addNewItem = (NewItemContent) => {
        const newList = [...this.state.todoList,{content: NewItemContent, done: false}];
        this.setState({
            todoList: newList
        })      
    }

    changeDone = (changeItem) => {
        const changeList = this.state.todoList
        changeList.forEach((item) =>{
            if (item.content === changeItem){
                item.done = true
            }
        }
    );
    this.setState({
        todoList: changeList
    })
    }

    render(){
        
        return(
            <div className="todolist">
                <NewItem addItem={this.addNewItem}/>
                {
                    this.state.todoList.map(item => <ListItem cDone={this.changeDone} item={item}/>)
                }
                
            </div>
        );
    }
    
}
export default TodoList;