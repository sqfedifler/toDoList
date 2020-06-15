import React from 'react';

export default class Create extends React.Component{
   constructor(props){
     super(props);
     this.state={
         val:""
     }

   }
   

   render(){
    let {addData}=this.props;
    return (
    <div id="create-todo">
        <input
            id="new-todo" 
            placeholder="What needs to be done?" 
            autoComplete="off"
            type="text"
            value={this.state.val}
            onChange={
              (e)=>{
                 this.setState({
                     val:e.target.value
                 }) 
              }
            }
            onKeyDown={
              ({keyCode})=>{
                if(keyCode==13){
                  if(this.state.val.trim()){
                    addData(this.state.val);
                  }else{
                    alert("请输入内容")
                  }
                  this.setState({
                      val:""
                  })
                }
              }
            }

        
        
        
        />
               

         
    </div>)
     

   }





}