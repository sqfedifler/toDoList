import React from 'react';
export default class State extends React.Component{
    constructor(props){
      super(props);

    }

    render(){
      let {data}=this.props;
      let {removeDone}=this.props;
      let undoneData=data.filter(item=>item.done==false)
      let doneData=data.filter(item=> item.done==true)
      return(
        <div id="todo-stats">
            <span className="todo-count">
            <span className="number">{undoneData.length}</span> <span className="word">项待完成</span>
            </span>  
            {doneData.length>0?(
            <span className="todo-clear">
              <a 
                  href="#"
                  onClick={()=>{
                   removeDone()
                  }}
              >
                  Clear <span>{doneData.length}</span> 已完成事项
              </a>
            </span>
            ):""}
        </div>


      )

    }



}