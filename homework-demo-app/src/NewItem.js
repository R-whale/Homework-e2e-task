import React, {Component} from 'react';
import './NewItem.css'

class NewItem extends Component{

    constructor(props){
        super(props);
        this.state={
            inputContent: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            inputContent: event.target.value
        })
    }
    
    onAddBtnClick = () =>{
        if (this.state.inputContent === ''){
            this.setState({
                inputContent: 'Input is null.'
            })
        }else{
        this.props.addItem(this.state.inputContent)
        this.setState({
            inputContent: ''
        })}
    }

    //return一个标签，如果有多个，用div包裹起来
    render(){
        return(
            <div className='same div'> 
            
            <input className="same text" value={this.state.inputContent} onChange={this.onInputChange}/>
            <button className="same btn" onClick={this.onAddBtnClick}>Add To-do</button>

        </div>
        ) 
        
    }
    
}
export default NewItem;