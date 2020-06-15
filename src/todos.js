import React from 'react';
import Li from  "./li"

export default class Todos extends React.Component{
 constructor(props){
   super(props)
 }

 render(){
  let {data}=this.props;
  return(
    <ul id="todo-list">
      {data.map((item)=>{
       return <Li key={item.id} {...this.props} data={item}/>
      })}

    </ul>
  )
 }




    
}