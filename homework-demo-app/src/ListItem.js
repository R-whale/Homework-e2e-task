import React, {Component} from 'react';
import './ListItem.css'


class ListItem extends Component{
    constructor(props){
        super(props)
    } 
    
    onDoneChange = (event) => {
        this.props.cDone(event.target.innerText)
    }

 
    
    render(){

        const item = this.props.item;
        if (item.done) {
            return (
            <div container>
                <p className="done-item">{item.content}</p>
                </div>
                )
        } else {
            return (
            <div>
                <p onClick={this.onDoneChange} className="item">{item.content}</p>
                </div>)
        }
    }
}

/*
const ListItem = (props) => {
    const item = props.item;
    if (item.done) {
        return <p className="done-item">{item.content}</p>
    } else {
        return <p className="item">{item.content}</p>
    }
} */

export default ListItem;