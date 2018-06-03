import React, {Component} from 'react'
import "./App.css"

class TodoItem extends Component{
  // construction(props){
  //   super(props);
  //
  // }
  removeTodo(id){
    this.props.removeTodo(id);
  }

  render(){
    return(
      <div className="todoWrapper">
        <button className="btn-circle" className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}></button>{this.props.todo.text}
      </div>
    )


  }
}
export default TodoItem
